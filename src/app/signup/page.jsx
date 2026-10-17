"use client";
import Link from "next/link";

const SignUpPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: এখানে তোমার signup authentication logic বসাবে
  };
  return (
    <main className="min-h-[690px] bg-[#eff5ef] px-4 py-10">
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

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm">
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-[#07883e]"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-1.5 block text-sm">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="আবার লিখুন"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-[#07883e]"
              />
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
              // TODO: Add Google sign-up
            >
              <span className="font-bold text-base text-[#4285f4]">G</span>
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-xs font-semibold transition hover:bg-[#eff5ef] sm:text-sm"
              // TODO: Add GitHub sign-up
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 1.98 3.18 1.51.1-.72.4-1.2.72-1.48-2.5-.29-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.25-5.14 5.54.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
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
