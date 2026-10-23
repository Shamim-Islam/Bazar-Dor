import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-10 text-[#202a27] sm:px-6">
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
            <Image
              src="/profile.png"
              alt="Profile picture"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate font-semibold">Rezwan Ahmed</h2>
            <p className="truncate text-sm text-gray-500">
              rezwanahmed@gmail.com
            </p>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-lg border border-red-400 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 sm:px-4"
          >
            ↪ লগ আউট
          </button>
        </section>

        {/* Profile form UI only */}
        <section className="rounded-xl border border-gray-200 bg-white/80 p-5 sm:p-6">
          <h2 className="mb-6 font-bold">তথ্য</h2>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2.5 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            আপডেট
          </button>
        </section>
      </div>
    </main>
  );
}
