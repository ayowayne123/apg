"use client";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { apiFetch } from "@/lib/api";

export default function ResetPasswordPage() {
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = new URLSearchParams(window.location.search);
      setEmailOrPhone(search.get("email_or_phone") ?? "");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm)
      return toast.error("Passwords do not match");

    setLoading(true);
    try {
      await apiFetch("/api/reset-password", {
        method: "POST",
        body: JSON.stringify({
          email_or_phone: emailOrPhone,
          password: form.password,
          password_confirmation: form.confirm,
        }),
      });
      toast.success("Password reset successfully. You can log in now.");
      router.push("/login");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
        <input
          type="password"
          placeholder="New password"
          className="w-full p-3 border rounded-lg"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full p-3 border rounded-lg"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
