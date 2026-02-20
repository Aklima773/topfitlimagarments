"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";  // ✅ MISSING
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import SocialButtons from "../api/auth/SocialButtons";

export default function LoginPage() {
    const searchParams = useSearchParams();
    const callback  =searchParams.get("callbackUrl") || "/";
    const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");  //


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");  // Clear error on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  // Clear previous errors

   
    if(result.acknowledge){
    const result = await signIn("credentials", { 
      email: form.email,
      password: form.password, 
      redirect: false ,
      callbackUrl: searchParams.get("callbackUrl") || "/"
    });

    if (!result.ok) {
      Swal.fire("Invalid email or password . Try Google Login/ Register", "error")
      console.log("Login failed:", result.error);
      
    }else{
      Swal.fire("successfully login");
      router.push(callback)
    }
}
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Login to your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Google Button */}
       <SocialButtons></SocialButtons>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="w-full btn btn-primary bg-primary text-xl text-accent py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Dont have an account?{" "}
          <Link href={`/register?callbackUrl=${callback}`} className="text-primary font-semibold hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
