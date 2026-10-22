"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, UserRound, LogOut } from "lucide-react";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error("Sign out failed:", error);
      return;
    }

    setIsOpen(false);
    router.push("/signin");
    router.refresh();
  };

  if (isPending) {
    return <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />;
  }

  return (
    <div className="relative">
      {user ? (
        <>
          {/* Avatar and username */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition ]"
          >
            <div className="avatar">
              <div className="mask mask-squircle w-9">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User avatar"}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#07883e] text-base font-semibold text-white">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <span className="max-w-28 truncate text-sm font-semibold text-[#26332b]">
              {user.name || "ব্যবহারকারী"}
            </span>

            <ChevronDown
              size={16}
              className={`shrink-0 text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Outside click area */}
          {isOpen && (
            <button
              type="button"
              aria-label="Close dropdown"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 cursor-default"
            />
          )}

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-[#e1e9e1] bg-white p-2.5 shadow-lg sm:w-72">
              {/* User information */}
              <div className="flex items-center gap-3 border-b border-[#edf1ed] px-2.5 py-3">
                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#e0e8e0] bg-white">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User avatar"}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#07883e] text-lg font-semibold text-white">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#26332b]">
                    {user.name || "ব্যবহারকারী"}
                  </p>

                  <p className="mt-1 truncate text-xs text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Profile */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/profile");
                }}
                className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#26332b] transition hover:bg-[#eff5ef]"
              >
                <UserRound size={18} />
                প্রোফাইল দেখুন
              </button>

              {/* Sign out */}
              <button
                type="button"
                onClick={handleSignOut}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                সাইন আউট
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-1.5">
          <Link href="/signin">
            <Button
              variant="light"
              className="min-w-0 rounded-lg bg-transparent px-3 text-sm font-semibold text-[#26332b] transition hover:bg-[#d5d5d5] sm:px-5"
            >
              সাইন ইন
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="min-w-0 rounded-lg bg-[#05893E] px-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#047532] sm:px-5">
              সাইন আপ
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
