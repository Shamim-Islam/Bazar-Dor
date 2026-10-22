"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { ChevronDown } from "lucide-react/dist/cjs/lucide-react";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <div className="flex gap-2 items-center">
              <div className="mask mask-squircle w-10 ring-primary ring-offset-base-100 ring-2 ring-offset-2">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                />
              </div>
              <h2>{user?.name}</h2>
              <ChevronDown />
            </div>
          </div>
          <div
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm"
          >
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
      ) : (
        <div>
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
