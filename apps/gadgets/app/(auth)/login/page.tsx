"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { apiFetch } from "@/lib/api/api";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { getGuestSessionId } from "@/lib/cart/session";

export default function LoginPage() {
  const [form, setForm] = useState({ login: "", password: "" });
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const guestSessionId = getGuestSessionId();
    try {
      const res = await apiFetch("/api/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          ...(guestSessionId && { "X-SESSION-ID": guestSessionId }),
        },
      });

      const { token, user } = res;

      Cookies.set("apg_token", token, {
        expires: 7, // days
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
      });

      Cookies.set("user", JSON.stringify(user), { expires: 7 });

      toast.success("Logged in successfully!");

      // Redirect to intended page
      router.push(redirectTo);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center text-black pb-8">
      <form onSubmit={handleLogin} className="px-2  w-full max-w-sm space-y-4">
        <h3 className="text-[32px] font-bold text-center leading-5 tracking-[-0.6px] ">
          Welcome Back!
        </h3>
        <p className="  tracking-[-0.16px] text-center">
          Enter your details to access your account
        </p>
        <div className="w-full mt-5 ">
          <label htmlFor="email" className="font-light">
            Email address / Phone Number
          </label>
          <input
            type="text"
            disabled={loading}
            placeholder="yourId@email.com"
            className="w-full py-2  mt-2 px-5 h-[52px] focus:outline-primary rounded-lg bg-[#F2F2F2] text-sm placeholder:text-[#A0A3BD] mb-3"
            value={form.login}
            onChange={(e) => setForm({ ...form, login: e.target.value })}
          />
        </div>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            disabled={loading}
            placeholder="Pass1234#"
            className="w-full py-2 px-5 mt-2 h-[52px] focus:outline-primary rounded-lg bg-[#F2F2F2] text-sm placeholder:text-[#A0A3BD] mb-3 pr-12"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="button"
            aria-pressed={showPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full h-12 flex items-center justify-center rounded-lg font-medium text-lg transition
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary text-black"}
  `}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Signing in...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>
      <div className="flex px-2  items-center my-6 max-w-sm w-full">
        <div className="flex-grow h-px bg-[#CECECE]"></div>
        <span className="px-2.5 text-greyText text-sm font-light">OR</span>
        <div className="flex-grow h-px bg-[#CECECE]"></div>
      </div>

      <Link
        href="/login"
        className=" hover:bg-grey/40 rounded-xl gap-3 h-12 bg-[#F4F1FF] font-light flex items-center justify-center max-w-sm w-full text-xs text-center"
      >
        <FcGoogle size={24} /> <span>Continue with Google</span>
      </Link>

      <div className="max-w-sm w-full text-center mt-5">
        Dont have an Account?{" "}
        <Link
          href="/signup"
          className="text-primary hover:text-apgRed font-medium"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
