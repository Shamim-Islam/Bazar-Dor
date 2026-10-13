import { getProducts, getCategoryBySlug } from "@/lib/api";
import SortingProducts from "../../components/SortingProducts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const category = await getCategoryBySlug(categoryId);
  return {
    title: category
      ? `${category.nameBn} — আজকের দাম ও পরিবর্তন`
      : "পণ্যের ক্যাটাগরি — বাজার দর",
  };
}

export default async function ProductsPage({ params }) {
  const { categoryId } = await params;
  const category = await getCategoryBySlug(categoryId);
  console.log(categoryId, category);
  if (!category) {
    notFound();
  }

  const products = await getProducts(categoryId);

  return (
    <main className="bg-[#e8f5e9]">
      <div className="mx-auto max-w-7xl px-4 lg:px-0 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <span>হোম</span> /{" "}
          <span className="text-gray-700">{category.nameBn}</span>
        </nav>

        {/* Header Card */}
        <section className="mb-6 flex flex-col items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-3xl">
              {category.icon}
            </div>

            <div>
              <h1 className="text-2xl font-bold">{category.nameBn}</h1>

              <p className="text-sm text-gray-500">
                {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </section>

        {/* Sort Bar */}
        <SortingProducts products={products} />
      </div>
    </main>
  );
}
