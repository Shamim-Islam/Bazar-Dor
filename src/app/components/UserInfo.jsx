"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
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
    return <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200" />;
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
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-[#e4ece4]"
          >
            <div className="h-7 w-7 overflow-hidden rounded-full border border-[#e0e8e0] bg-white">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User avatar"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#07883e] text-xs font-semibold text-white">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>

            <span className="max-w-20 truncate text-xs font-medium text-[#26332b]">
              {user.name || "ব্যবহারকারী"}
            </span>

            <ChevronDown
              size={13}
              className={`text-gray-500 transition-transform ${
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
            <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-[#e1e9e1] bg-white p-2 shadow-lg">
              <div className="border-b border-[#edf1ed] px-2 py-2.5">
                <p className="truncate text-xs font-semibold text-[#26332b]">
                  {user.name}
                </p>

                <p className="mt-1 truncate text-[10px] text-gray-500">
                  {user.email}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/profile");
                }}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs text-[#26332b] transition hover:bg-[#eff5ef]"
              >
                <UserRound size={14} />
                প্রোফাইল দেখুন
              </button>

              <button
                type="button"
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={14} />
                সাইন আউট
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-1">
          <Link href="/signin">
            <Button
              variant="light"
              className="min-w-0 rounded-lg bg-transparent px-2.5 text-xs font-semibold text-[#26332b] transition hover:bg-[#d5d5d5] sm:px-5 sm:text-sm"
            >
              সাইন ইন
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="min-w-0 rounded-lg bg-[#05893E] px-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#047532] sm:px-5 sm:text-sm">
              সাইন আপ
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
