"use client";
import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full border-b border-gray-100 bg-[#f9fbf9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-19 items-center justify-between">
          {/* Logo and Date */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05893E]">
              <ShoppingCart
                size={23}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-xl font-bold text-[#26332b]">বাজার দর</h1>

              <p className="mt-1 text-xs text-[#4b554e]">{date}</p>
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href="/signIn">
              <Button
                variant="light"
                className="min-w-0 bg-transparent rounded-lg px-5 text-sm font-semibold text-[#26332b]  transition hover:bg-[#d5d5d5]"
              >
                সাইন ইন
              </Button>
            </Link>

            <Link href="/signUp">
              <Button className="min-w-0 rounded-lg bg-[#05893E] px-5 text-sm font-semibold text-white shadow-md transition hover:bg-[#047532]">
                সাইন আপ
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Navlinks />
    </header>
  );
};

export default Header;
