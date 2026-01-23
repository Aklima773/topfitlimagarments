"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Login to your account</p>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full btn btn-primary bg-primary text-xl text-accent py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
