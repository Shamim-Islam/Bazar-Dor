export default function Loading() {
  return (
    <main className="min-h-screen bg-[#e8f5e9]">
      <div className="mx-auto max-w-7xl animate-pulse px-4 py-8 lg:px-0">
        {/* Breadcrumb skeleton */}
        <div className="mb-6 h-4 w-52 rounded bg-gray-300" />

        {/* Category header skeleton */}
        <section className="mb-6 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6">
          <div className="h-14 w-14 shrink-0 rounded-2xl bg-gray-200" />

          <div className="flex-1 space-y-3">
            <div className="h-6 w-40 max-w-full rounded bg-gray-200" />
            <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
          </div>
        </section>

        {/* Sorting controls skeleton */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="h-10 w-36 rounded-xl bg-white" />
          <div className="h-10 w-44 rounded-xl bg-white" />
        </div>

        {/* Product cards skeleton */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-[#dce5dc] bg-white"
            >
              <div className="flex h-32 items-center justify-center bg-[#eff5ef] sm:h-40">
                <div className="h-16 w-16 rounded-2xl bg-gray-200" />
              </div>

              <div className="space-y-3 p-4">
                <div className="h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
                <div className="h-6 w-2/3 rounded bg-gray-200" />
                <div className="h-9 w-full rounded-xl bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
