import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/api";
import MarketTable from "@/components/MarketTable";
import PriceChange from "@/components/PriceChange";

export async function generateStaticParams() {
  const products = await getProducts("chal");
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "পণ্য পাওয়া যায়নি" };
  return { title: `${product.nameBn} — আজকের দাম` };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const { markets, today, change, unit } = product;

  const allMins = markets.map((m) => m.min);
  const allMaxs = markets.map((m) => m.max);
  const overallMin = Math.min(...allMins);
  const overallMax = Math.max(...allMaxs);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        হোম / চাল / <span className="text-gray-700">{product.nameBn}</span>
      </nav>

      {/* হিরো কার্ড */}
      <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-4xl">
            {product.image || "🍚"}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.nameBn}</h1>
            <p className="text-sm text-gray-500">প্রতি {unit} / চাল</p>
            <p className="text-sm text-gray-500">
              পটকারাতুর তুলনায় আজ দাম{" "}
              <span
                className={
                  change.dir === "up"
                    ? "text-red-600"
                    : change.dir === "down"
                      ? "text-green-600"
                      : "text-gray-600"
                }
              >
                {change.dir === "up"
                  ? "বেড়েছে"
                  : change.dir === "down"
                    ? "কমেছে"
                    : "অপরিবর্তিত"}
              </span>{" "}
              {Math.abs(change.pct).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* আজকের দাম কার্ড */}
        <div className="rounded-2xl bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="text-4xl font-bold text-gray-900">{today}</p>
          <p className="text-xs text-gray-500">টাকা / {unit}</p>
          <div className="mt-1 flex justify-center">
            <PriceChange change={change} />
          </div>
        </div>
      </section>

      {/* সারসংক্ষেপ কার্ড */}
      <section className="mb-6 rounded-2xl border border-gray-100 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SummaryCard
            label="সর্বনিম্ন দাম"
            value={overallMin}
            note="সবচেয়ে কম দামের বাজার"
            accent="green"
          />
          <SummaryCard
            label="সর্বোচ্চ দাম"
            value={overallMax}
            note="সবচেয়ে বেশি দামের বাজার"
            accent="red"
          />
          <SummaryCard
            label="গড় দাম"
            value={Math.round((overallMin + overallMax) / 2)}
            note={`প্রতি ${unit}-এর হিসাব`}
            accent="gray"
          />
        </div>
      </section>

      {/* বাজারভিত্তিক টেবিল */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
        <MarketTable markets={markets} />
      </section>
    </main>
  );
}

function SummaryCard({ label, value, note, accent }) {
  const colors = {
    green: "text-green-600",
    red: "text-red-600",
    gray: "text-gray-700",
  };
  return (
    <div className="rounded-xl border border-gray-100 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${colors[accent]}`}>
        {value} টাকা
      </p>
      <p className="mt-1 text-xs text-gray-400">{note}</p>
    </div>
  );
}
