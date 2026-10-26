export default function SignUpLoading() {
  return (
    <main className="min-h-[690px] animate-pulse bg-[#eff5ef] px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="h-8 w-56 rounded-lg bg-gray-200" />
          <div className="h-4 w-64 rounded bg-gray-200" />
        </div>

        <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5">
          <div className="space-y-4">
            {["name", "email", "password", "confirm"].map((field) => (
              <div key={field} className="space-y-2">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-10 w-full rounded-lg bg-gray-200" />
              </div>
            ))}

            <div className="h-11 w-full rounded-lg bg-gray-300" />
          </div>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <div className="h-3 w-10 rounded bg-gray-200" />
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 rounded-lg bg-gray-200" />
            <div className="h-10 rounded-lg bg-gray-200" />
          </div>

          <div className="mx-auto mt-5 h-4 w-48 rounded bg-gray-200" />
        </div>

        <div className="mx-auto mt-5 h-4 w-40 rounded bg-gray-200" />
      </div>
    </main>
  );
}
