"use client";
import {
  authClient,
  handleGoogleSignIn,
  handleGithubSignIn,
} from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    const password = user.password;
    const confirmPassword = user.confirmPassword;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("রেজিস্ট্রেশন সফল!" || "Account created successfully");
      redirect("/");
    }
    if (error) {
      toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ!");
    }

    
  };

  return (
    <main className="min-h-172.5 bg-[#eff5ef] px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#202b23]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm">
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-[#07883e]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm">
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-[#07883e]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm">
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-[#07883e]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                  }
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 transition hover:text-[#07883e]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="mb-1.5 block text-sm">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="আবার লিখুন"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-[#07883e]"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "নিশ্চিত পাসওয়ার্ড লুকান"
                      : "নিশ্চিত পাসওয়ার্ড দেখুন"
                  }
                  aria-pressed={showConfirmPassword}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 transition hover:text-[#07883e]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#07883e] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067532] focus:outline-none focus:ring-2 focus:ring-[#07883e] focus:ring-offset-2"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dfe8df]" />
            <span className="text-xs text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-[#dfe8df]" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="h-5 w-5 shrink-0" />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
              onClick={handleGithubSignIn}
            >
              <FaGithub className="h-5 w-5 shrink-0" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-gray-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#07883e] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-xs text-gray-500 transition hover:text-[#07883e]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
