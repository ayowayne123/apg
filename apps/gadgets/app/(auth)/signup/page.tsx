"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm)
      return toast.error("Passwords do not match");

    try {
      await apiFetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });
      toast.success("Account created. Check your email for OTP.");
      router.push(`/verify?email=${form.email}`);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center text-black pb-8 ">
      <form
        onSubmit={handleSubmit}
        className="px-2  w-full space-y-4 max-w-sm "
      >
        <h3 className="text-[32px] font-bold text-center leading-5 tracking-[-0.6px] ">
          Welcome
        </h3>
        <p className="  tracking-[-0.16px] text-center">
          We promise this won’t take long,
          <br />
          you just need to fill in some details.
        </p>
        <div className="w-full mt-5 ">
          <label htmlFor="email" className="font-light">
            Email address / Phone Number
          </label>
          <input
            type="email"
            placeholder="yourId@email.com"
            className="w-full py-2  mt-2 px-5 h-[52px] focus:outline-primary rounded-lg bg-[#F2F2F2] text-sm placeholder:text-[#A0A3BD] mb-3"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
        <div className="w-full ">
          <label htmlFor="confirm" className=" font-light">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Pass1234#"
            className="w-full py-2 px-5 mt-2 h-[52px] focus:outline-primary rounded-lg bg-[#F2F2F2] text-sm placeholder:text-[#A0A3BD] mb-3"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-black h-12 flex items-center justify-center text-center rounded-lg font-medium capitalize text-lg"
        >
          continue
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
