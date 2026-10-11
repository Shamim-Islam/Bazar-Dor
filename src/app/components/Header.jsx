import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

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
                {date}
              </p>
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link href="/signIn">
              <Button
                variant="light"
                className="min-w-0 rounded-lg bg-transparent px-2.5 text-xs font-semibold text-[#26332b] transition hover:bg-[#d5d5d5] sm:px-5 sm:text-sm"
              >
                সাইন ইন
              </Button>
            </Link>

            <Link href="/signUp">
              <Button className="min-w-0 rounded-lg bg-[#05893E] px-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#047532] sm:px-5 sm:text-sm">
                সাইন আপ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
