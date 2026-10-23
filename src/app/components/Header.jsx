"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import UserInfo from "./UserInfo";
import CurrentDate from "./CurrentDate";

const Header = () => {

  return (
    <header className="w-full border-b border-gray-100 bg-[#f9fbf9]">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-0">
        <div className="flex min-h-16 items-center justify-between gap-2 sm:min-h-19 sm:gap-4">
          {/* Logo and Date */}
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#05893E] sm:h-10 sm:w-10">
              <ShoppingCart
                size={21}
                strokeWidth={1.8}
                className="text-white sm:hidden"
              />
              <ShoppingCart
                size={23}
                strokeWidth={1.8}
                className="hidden text-white sm:block"
              />
            </div>

            <div className="min-w-0 leading-tight">
              <h1 className="text-base font-bold text-[#26332b] sm:text-xl">
                বাজার দর
              </h1>

              <p className="mt-1 max-w-[180px] truncate text-[10px] text-[#4b554e] sm:max-w-none sm:text-xs">
                <CurrentDate />
              </p>
            </div>
          </Link>

          {/* Auth Buttons */}
          <UserInfo/>
        </div>
      </div>
    </header>
  );
};

export default Header;
