"use client";

import { Suspense, useState } from "react";
import {
  authClient,
  handleGoogleSignIn,
  handleGithubSignIn,
} from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function SignInForm() {
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

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
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
  };

  return (
    <main className="min-h-[690px] bg-[#eff5ef] px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#202b23]">সাইন ইন করুন</h1>

          <p className="mt-2 text-sm text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#07883e] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067532] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  সাইন ইন হচ্ছে...
                </span>
              ) : (
                "সাইন ইন করুন"
              )}
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
              onClick={() => handleGoogleSignIn()}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
            >
              <FcGoogle className="h-5 w-5 shrink-0" />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={() => handleGithubSignIn()}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
            >
              <FaGithub className="h-5 w-5 shrink-0" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

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
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[690px] items-center justify-center bg-[#eff5ef]">
          <p className="text-sm text-gray-500">লোড হচ্ছে...</p>
        </main>
      }
    >
      <SignInForm />
    </Suspense>
  );
}
