const ProductCard = ({ product }) => {
  const { nameBn, categoryNameBn, categoryIcon, image, today, unit, change } =
    product;

  const isUp = change?.dir === "up";
  const isDown = change?.dir === "down";

  const formatPrice = (price) => new Intl.NumberFormat("bn-BD").format(price);

  return (
    <article className="min-w-0 rounded-xl border border-[#e3eae4] bg-[#fbfdfb] p-3 transition hover:border-green-300 hover:shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f0] text-xl">
          {image || categoryIcon || "🛒"}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-gray-800">{nameBn}</h3>

          <p className="mt-0.5 text-xs text-gray-500">
            {categoryNameBn || "পণ্য"}
          </p>
        </div>

        {change && (
          <span
            className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${
              isUp
                ? "bg-red-50 text-red-600"
                : isDown
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            {isUp ? "▲" : isDown ? "▼" : "—"}
            {formatPrice(Math.abs(change.pct))}%
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-xs text-gray-500">আজকের দাম</p>

        <p className="mt-0.5 text-sm font-bold text-gray-900">
          {formatPrice(today)} টাকা
          <span className="ml-1 text-xs font-normal text-gray-500">
            /
            {unit === "kg"
              ? "কেজি"
              : unit === "litre"
                ? "লিটার"
                : unit === "dozen"
                  ? "ডজন"
                  : unit === "piece"
                    ? "পিস"
                    : unit}
          </span>
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
