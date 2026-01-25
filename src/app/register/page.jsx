"use client";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";  // ✅ FIXED #1
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);  // ✅ Bonus: loading state

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Validation
    if (!form.name || !form.email || !form.password) {
      setLoading(false);
      return alert("All fields are required");
    }

    if (form.password !== form.confirm) {
      setLoading(false);
      return alert("Passwords do not match");
    }

    try {
      // ✅ FIXED #2: Different variable names
      const registerResult = await postUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      // ✅ FIXED #3: Check for successful registration (user object)
      if (registerResult) {  // Returns user object or null
        alert("Registration successful! Logging in...");
        
        // Auto-login after registration
        const loginResult = await signIn("credentials", {
          email: form.email,
          password: form.password,
          callbackUrl: callbackUrl,  // ✅ Dynamic redirect
          redirect: false
        });

        if (!loginResult?.error) {
          router.push(callbackUrl);  // Back to products page
        } else {
          alert("Registration successful! Please login manually.");
          router.push("/login");
        }
      } else {
        alert("Email already exists!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-1">Join TopFit Lima Garments today</p>
        </div>

        <button
          type="button"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-100 transition disabled:opacity-50"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
            disabled={loading}
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
            disabled={loading}
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
            disabled={loading}
          />
          <input
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            type="password"
            placeholder="Confirm password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary bg-primary text-accent text-xl py-2.5 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Creating..." : "Register"}
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
