

import { getProducts } from "@/lib/api";
import ProductCard from "../../components/ProductCard";
import { notFound } from "next/navigation";

const categoryInfo = {
  chal: {
    name: "চাল",
    icon: "🍚",
  },
  dal: {
    name: "ডাল",
    icon: "🫘",
  },
  tel: {
    name: "তেল",
    icon: "🫗",
  },
};

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const category = categoryInfo[categoryId];

  return {
    title: category
      ? `${category.name} — আজকের দাম ও পরিবর্তন`
      : "পণ্যের ক্যাটাগরি — বাজার দর",
  };
}

export default async function ProductsPage({ params }) {
  const { categoryId } = await params;

  let products;

  try {
    products = await getProducts(categoryId);
  } catch (error) {
    console.error("Failed to fetch category products:", error);
    throw error;
  }

  if (!categoryInfo[categoryId] || !products.length) {
    notFound();
  }

  const category = categoryInfo[categoryId];

  return (
      
      <main className="bg-[#e8f5e9]">
      <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <span>হোম</span> /{" "}
        <span>{category.name}</span> /{" "}
        <span className="text-gray-700">{category.name}</span>
      </nav>

      {/* Header Card */}
      <section className="mb-6 flex flex-col items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-3xl">
            {category.icon}
          </div>

          <div>
            <h1 className="text-2xl font-bold">{category.name}</h1>

            <p className="text-sm text-gray-500">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </section>

      {/* Sort Bar */}
      <div className="mb-6 flex items-center justify-end gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
        <label
          htmlFor="sort"
          className="text-sm text-gray-500"
        >
          সাজান
        </label>

        <select
          id="sort"
          defaultValue="default"
          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm outline-none focus:border-green-500"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-high">দাম: কম থেকে বেশি</option>
          <option value="high-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Count */}
      <p className="mb-4 text-sm text-gray-500">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Products */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
        </div>
    </main>
  );
}
