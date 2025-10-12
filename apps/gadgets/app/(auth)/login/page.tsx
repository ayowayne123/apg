"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { apiFetch } from "@/lib/api/api";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [form, setForm] = useState({ email_or_phone: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch("/api/login", {
        method: "POST",
        body: JSON.stringify(form),
      });
      toast.success("Logged in successfully!");
      router.push("/"); // change to your app's landing page
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
      }
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
            placeholder="yourId@email.com"
            className="w-full py-2  mt-2 px-5 h-[52px] focus:outline-primary rounded-lg bg-[#F2F2F2] text-sm placeholder:text-[#A0A3BD] mb-3"
            value={form.email_or_phone}
            onChange={(e) =>
              setForm({ ...form, email_or_phone: e.target.value })
            }
          />
        </div>
        <div className="w-full ">
          <label htmlFor="password" className=" font-light">
            Password
          </label>

          <input
            type="password"
            placeholder="Pass1234#"
            className="w-full py-2 px-5 mt-2 h-[52px] focus:outline-primary rounded-lg bg-[#F2F2F2] text-sm placeholder:text-[#A0A3BD] mb-3"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black h-12 flex items-center justify-center text-center rounded-lg font-medium capitalize text-lg"
        >
          Login
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
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary hover:text-apgRed font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
