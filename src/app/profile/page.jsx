"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useSignOut } from "@/hooks/useSignOut";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = useSignOut();

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries());
    
    await authClient.updateUser({
      ...newUserData
    })
    
  };

  // Skeleton loading
  if (isPending) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#f0f5f1] px-4 py-10 sm:px-6">
        <div className="mx-auto min-w-0 max-w-3xl">
          {/* Heading skeleton */}
          <div className="mb-6 space-y-2">
            <div className="h-7 w-40 animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-64 max-w-full animate-pulse rounded-md bg-gray-200" />
          </div>

          {/* Profile card skeleton */}
          <section className="mb-5 flex items-center gap-4 rounded-xl border border-gray-200 bg-white/80 p-4">
            <div className="h-16 w-16 shrink-0 animate-pulse rounded-xl bg-gray-200" />

            <div className="min-w-0 flex-1 space-y-3">
              <div className="h-5 w-36 max-w-full animate-pulse rounded-md bg-gray-200" />
              <div className="h-4 w-48 max-w-full animate-pulse rounded-md bg-gray-200" />
            </div>

            <div className="h-9 w-20 shrink-0 animate-pulse rounded-lg bg-gray-200" />
          </section>

          {/* Form skeleton */}
          <section className="rounded-xl border border-gray-200 bg-white/80 p-5 sm:p-6">
            <div className="mb-6 h-5 w-16 animate-pulse rounded-md bg-gray-200" />
            <div className="mb-2 h-4 w-10 animate-pulse rounded-md bg-gray-200" />
            <div className="h-11 w-full animate-pulse rounded-lg bg-gray-200" />
            <div className="mt-4 h-11 w-full animate-pulse rounded-lg bg-gray-200" />
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f0f5f1] px-4 py-10 text-[#202a27] sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User information */}
        <section className="mb-5 flex items-center gap-4 rounded-xl border border-gray-200 bg-white/80 p-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
            {user?.image ? (
              <Image
                src={user.image}
                alt="Profile picture"
                fill
                sizes="64px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-green-100 text-xl font-bold text-green-800">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate font-semibold">
              {user?.name || "ব্যবহারকারী"}
            </h2>
            <p className="truncate text-sm text-gray-500">
              {user?.email || ""}
            </p>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 sm:px-4"
            onClick={handleSignOut}
          >
            ↪ সাইন আউট
          </button>
        </section>

        {/* Profile form UI */}
        <section className="rounded-xl border border-gray-200 bg-white/80 p-5 sm:p-6">
          <h2 className="mb-6 font-bold">তথ্য</h2>

          <form onSubmit={handleUpdateUser}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user?.name || ""}
                className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              আপডেট
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
