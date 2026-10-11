"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="w-full bg-[#e8f5e9] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center overflow-hidden">
          <div className="flex-1 z-10 w-full">
            <div className="inline-block bg-[#e8f5e9] text-[#2e7d32] text-sm font-medium px-3 py-1 rounded-full mb-4">
              {date}
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <button className="bg-[#008a3e] hover:bg-[#007a36] transition-colors text-white font-medium py-2.5 px-6 rounded-lg text-sm md:text-base shadow-lg shadow-[#008a3e]/30 hover:shadow-[#007a36]/40">
              সব পণ্য দেখুন
            </button>
          </div>

          <div className="relative mt-8 h-70 w-full shrink-0 md:mt-0 md:h-63 md:w-[45%]">
            {" "}
            <Image
              src="/bazar-hero.png"
              alt="বাজারের পণ্যের ছবি"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 38vw"
              className="rounded-lg object-contain object-right"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
