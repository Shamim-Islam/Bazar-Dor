
const ProductsLoading = () => {
  return (
    <section className="bg-[#e8f5e9] py-6">
      <div className="mx-auto max-w-7xl">
        {/* Increase products */}
        <section className="mb-6 p-4 md:p-8 lg:mb-12 lg:p-0">
          <div className="mb-4 h-7 w-44 animate-pulse rounded-md bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProductCardSkeleton key={`up-${index}`} />
            ))}
          </div>
        </section>

        {/* Decrease products */}
        <section className="mb-6 p-4 md:p-8 lg:mb-12 lg:p-0">
          <div className="mb-4 h-7 w-44 animate-pulse rounded-md bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProductCardSkeleton key={`down-${index}`} />
            ))}
          </div>
        </section>

        {/* All products */}
        <section className="mb-7 p-4 md:p-8 lg:p-0">
          <div className="mb-2 h-7 w-32 animate-pulse rounded-md bg-gray-200" />
          <div className="mb-3 h-4 w-48 animate-pulse rounded-md bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={`all-${index}`} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

const ProductCardSkeleton = () => {
  return (
    <div className="rounded-xl border border-[#e3eae4] bg-[#fbfdfb] p-4">
      {/* Product name and category */}
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-gray-200" />

        <div className="min-w-0 flex-1 space-y-2 pt-1">
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="h-6 w-12 shrink-0 animate-pulse rounded-full bg-gray-200" />
      </div>

      {/* Price */}
      <div className="mt-4 space-y-2">
        <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductsLoading;
