export default function Loading() {
  return (
    <main className="min-h-screen bg-[#e8f5e9]">
      <div className="mx-auto max-w-7xl animate-pulse px-4 py-6 lg:px-0">
        <div className="mb-6 h-4 w-64 rounded bg-gray-300" />

        <div className="mb-5 flex h-36 items-center gap-4 rounded-2xl bg-[#f9fcf9] p-5">
          <div className="h-16 w-16 rounded-2xl bg-gray-200" />
          <div className="space-y-3">
            <div className="h-5 w-40 rounded bg-gray-200" />
            <div className="h-3 w-28 rounded bg-gray-200" />
          </div>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-28 rounded-2xl bg-[#f9fcf9]"
            />
          ))}
        </div>

        <div className="space-y-2 rounded-2xl bg-[#f9fcf9] p-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-12 rounded bg-[#eff5ef]" />
          ))}
        </div>
      </div>
    </main>
  );
}