"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function SortingProducts({ products }) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-high") {
      return Number(a.today) - Number(b.today);
    }

    if (sort === "high-low") {
      return Number(b.today) - Number(a.today);
    }

    return 0;
  });

  return (
    <>
      {/* Sort Bar */}
      <div className="mb-6 flex items-center justify-end gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
        <label htmlFor="sort" className="text-sm text-gray-500">
          সাজান
        </label>

        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm outline-none focus:border-green-500"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-high">দাম: কম থেকে বেশি</option>
          <option value="high-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Count */}
      <p className="mb-4 text-sm text-gray-500">
        মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Products */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl bg-white p-6 text-center text-gray-500">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </p>
      )}
    </>
  );
}
