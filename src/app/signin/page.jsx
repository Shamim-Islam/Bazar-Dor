"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignInPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestedUrl = searchParams.get("callbackUrl");

  const callbackUrl =
    requestedUrl?.startsWith("/") &&
    !requestedUrl.startsWith("//") &&
    !requestedUrl.includes("\\")
      ? requestedUrl
      : "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const email = user.email;
    const password = user.password;

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: callbackUrl,
      });

      if (error) {
        toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে!");
        return;
      }

      if (data) {
        toast.success("সাইন ইন সফল হয়েছে!");
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[690px] bg-[#eff5ef] px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Page Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#202b23]">সাইন ইন করুন</h1>

          <p className="mt-2 text-sm text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Sign In Form */}
        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
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
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  autoComplete="current-password"
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#07883e] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067532] focus:outline-none focus:ring-2 focus:ring-[#07883e] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন করুন"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dfe8df]" />

            <span className="text-xs text-gray-500">অথবা</span>

            <div className="h-px flex-1 bg-[#dfe8df]" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
              // TODO: Add Google sign-in
            >
              <FcGoogle className="h-5 w-5 shrink-0" />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
              // TODO: Add GitHub sign-in
            >
              <FaGithub className="h-5 w-5 shrink-0" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-4 text-center text-xs text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#07883e] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        {/* Back to Home */}
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

export default SignInPage;
