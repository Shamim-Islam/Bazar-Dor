import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#e8f5e9] px-4 py-12">
      <section className="w-full max-w-7xl rounded-3xl border border-[#d8e8da] bg-white px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
        {/* Search emoji */}
        <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-[#e8f5e9] sm:h-36 sm:w-36">
          <span
            className="text-7xl sm:text-8xl"
            role="img"
            aria-label="খুঁজে পাওয়া যাচ্ছে না"
          >
            🔍
          </span>
        </div>

        {/* 404 */}
        <p className="mb-2 text-6xl font-extrabold tracking-wider text-[#05893E] sm:text-7xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mb-3 text-2xl font-bold text-[#26332b] sm:text-3xl">
          পেজটি পাওয়া যায়নি
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। পেজটি সরিয়ে ফেলা
          হতে পারে অথবা লিংকটি ভুল হতে পারে। চলুন, আবার বাজার দর-এর হোম পেজে
          ফিরে যাই।
        </p>

        {/* Home button */}
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#05893E] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#047532] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#05893E] focus-visible:ring-offset-2 sm:text-base"
        >
          <Home size={18} />
          হোম পেজে ফিরে যান
        </Link>

        {/* Brand */}
        <div className="mt-10 border-t border-[#edf1ed] pt-5">
          <p className="text-sm font-bold text-[#26332b]">🛒 বাজার দর</p>
          <p className="mt-1 text-xs text-gray-400">
            নিত্যপণ্যের দামের নির্ভরযোগ্য তথ্য
          </p>
        </div>
      </section>
    </main>
  );
}
