import { notFound } from "next/navigation";
import { getProductById } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { productsId } = await params;
  const product = await getProductById(productsId);

  return {
    title: product ? `${product.nameBn} — আজকের দাম` : "পণ্য পাওয়া যায়নি",
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { productsId } = await params;
  const product = await getProductById(productsId);
  console.log("productId", product);

  if (!product) {
    notFound();
  }

  const { nameBn, image, today, categoryNameBn, change, unit, markets } =
    product;

  const minPrices = markets.map((market) => Number(market.min));
  const maxPrices = markets.map((market) => Number(market.max));

  const lowestPrice = Math.min(...minPrices);
  const highestPrice = Math.max(...maxPrices);
  const averagePrice = markets.length
    ? markets.reduce(
        (total, market) =>
          total + (Number(market.min) + Number(market.max)) / 2,
        0,
      ) / markets.length
    : 0;
  const formatPrice = (price) => new Intl.NumberFormat("bn-BD").format(price);
  return (
    <main className="min-h-screen bg-[#e8f5e9] text-[#202b23]">
      <div className="mx-auto max-w-7xl px-4 lg:px-0 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <span>হোম</span> / <span>{categoryNameBn}</span> /{" "}
          <span className="text-gray-700">{nameBn}</span>
        </nav>

        {/* Product Hero */}
        <section className="mb-5 flex flex-col justify-between gap-5 rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eff5ef] text-4xl">
              {image}
            </div>

            <div>
              <h1 className="text-xl font-bold sm:text-2xl">{nameBn}</h1>

              <p className="mt-1 text-xs text-gray-500">
                প্রতি{" "}
                {unit === "kg"
                  ? "কেজি"
                  : unit === "litre"
                    ? "লিটার"
                    : unit === "piece"
                      ? "পিস"
                      : unit}{" "}
                · {categoryNameBn}
              </p>

              <p className="mt-2 text-xs text-gray-700">
                গতকালের তুলনায় আজ দাম{" "}
                <span
                  className={
                    change.dir === "up"
                      ? "font-semibold text-red-600"
                      : change.dir === "down"
                        ? "font-semibold text-green-600"
                        : "font-semibold text-gray-600"
                  }
                >
                  {change.dir === "up"
                    ? "বেড়েছে"
                    : change.dir === "down"
                      ? "কমেছে"
                      : "অপরিবর্তিত"}
                  {" · "}
                  {Math.abs(Number(change.pct)).toFixed(1)}%
                </span>
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="min-w-24 rounded-2xl bg-[#eff5ef] px-5 py-4 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="mt-1 text-3xl font-bold">{formatPrice(today)}</p>
            <p className="text-xs text-gray-500">
              টাকা /{" "}
              {unit === "kg"
                ? "কেজি"
                : unit === "litre"
                  ? "লিটার"
                  : unit === "piece"
                    ? "পিস"
                    : unit}
            </p>

            <p
              className={`mt-1 text-xs font-semibold ${
                change.dir === "down"
                  ? "text-green-600"
                  : change.dir === "up"
                    ? "text-red-600"
                    : "text-gray-500"
              }`}
            >
              {change.dir === "up" ? "▲" : change.dir === "down" ? "▼" : "—"}{" "}
              {Math.abs(Number(change.pct)).toFixed(1)}%
            </p>
          </div>
        </section>

        {/* Price Summary and Market Table */}
        <section className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-4 sm:p-5">
          <h2 className="mb-3 text-lg font-bold">দামের সারসংক্ষেপ</h2>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <SummaryCard
              label="সর্বনিম্ন দাম"
              value={formatPrice(lowestPrice)}
              note="সবচেয়ে কম দামের বাজার"
              color="green"
            />

            <SummaryCard
              label="সর্বোচ্চ দাম"
              value={formatPrice(highestPrice)}
              note="সবচেয়ে বেশি দামের বাজার"
              color="red"
            />

            <SummaryCard
              label="গড় দাম"
              value={formatPrice(averagePrice.toFixed(2).replace(/\.?0+$/, ""))}
              note={`প্রতি ${
                unit === "kg"
                  ? "কেজি"
                  : unit === "litre"
                    ? "লিটার"
                    : unit === "piece"
                      ? "পিস"
                      : unit
              }-এর হিসাব`}
              color="green"
            />
          </div>

          <h2 className="mb-3 text-base font-bold">বাজারভিত্তিক আজকের দাম</h2>

          {/* Responsive Market Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#e0e9e0]">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead className="bg-[#f9fcf9] text-gray-500">
                <tr>
                  <th className="px-3 py-3 font-semibold sm:px-4">বাজার</th>
                  <th className="px-3 py-3 font-semibold sm:px-4">বিভাগ</th>
                  <th className="px-3 py-3 text-right font-semibold sm:px-4">
                    সর্বনিম্ন
                  </th>
                  <th className="px-3 py-3 text-right font-semibold sm:px-4">
                    সর্বোচ্চ
                  </th>
                  <th className="px-3 py-3 text-right font-semibold sm:px-4">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => {
                  const average = (Number(market.min) + Number(market.max)) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className={`border-t border-[#dce5dc] ${
                        index % 2 === 0 ? "bg-[#f9fcf9]" : "bg-[#eff5ef]"
                      }`}
                    >
                      <td className="px-3 py-3 font-medium sm:px-4">
                        {market.market}
                      </td>

                      <td className="px-3 py-3 text-gray-600 sm:px-4">
                        {market.division}
                      </td>

                      <td className="px-3 py-3 text-right sm:px-4">
                        {formatPrice(market.min)} টাকা
                      </td>

                      <td className="px-3 py-3 text-right sm:px-4">
                        {formatPrice(market.max)} টাকা
                      </td>

                      <td className="px-3 py-3 text-right font-semibold sm:px-4">
                        {formatPrice(average.toFixed(2).replace(/\.?0+$/, ""))} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};
function SummaryCard({ label, value, note, color }) {
  const priceColor = color === "red" ? "text-red-600" : "text-green-600";

  return (
    <div className="rounded-2xl border border-[#e0e9e0] bg-[#f9fcf9] p-4">
      <p className="text-sm text-gray-600">{label}</p>

      <p className={`mt-1 text-2xl font-bold ${priceColor}`}>
        {value} <span className="text-xs font-normal">টাকা</span>
      </p>

      <p className="mt-1 text-xs text-gray-600">{note}</p>
    </div>
  );
}

export default ProductDetailsPage;
