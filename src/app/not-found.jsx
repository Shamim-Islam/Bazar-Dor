
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-6 text-center">
      {/* Emoji */}
      <div className="mb-6 text-7xl sm:text-8xl" role="img" aria-label="Search">
        🔍
      </div>

      {/* Error Code */}
      <p className="mb-3 text-sm font-bold tracking-[0.3em] text-orange-500">
        ERROR 404
      </p>

      {/* Heading */}
      <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">
        পেজটি পাওয়া যায়নি
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
        দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        পেজটি সরানো হয়েছে অথবা ঠিকানাটি ভুল হতে পারে।
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="w-full rounded-lg bg-[#07883e] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067532] focus:outline-none focus:ring-2 focus:ring-[#07883e] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        হোম পেজে ফিরে যান
      </Link>

w-full rounded-lg bg-[#07883e] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067532] focus:outline-none focus:ring-2 focus:ring-[#07883e] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70

    </main>
  );
}
