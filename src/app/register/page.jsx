"use client";

import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.name || !form.email || !form.password) {
      return alert("All fields are required");
    }

    if (form.password !== form.confirm) {
      return alert("Passwords do not match");
    }

    try {
      const result = await postUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (result?.acknowledged) {
        alert("Registration successful! Please login.");
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-1">
            Join TopFit Lima Garments today
          </p>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            type="password"
            placeholder="Confirm password"
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full btn btn-primary bg-primary text-accent text-xl py-2.5 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
