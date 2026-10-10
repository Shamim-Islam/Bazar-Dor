"use client";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const MarqueeClient = ({ products }) => {
  if (!products || products.length === 0) {
    return <div className="px-4 text-sm text-gray-500">কোনো ডেটা নেই</div>;
  }

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <MarqueeText
        speed={50}
        pauseOnHover={true}
        gradient={false}
        autoFill={true}
        style={{ width: "100%" }}
      >
        {products.map((product, index) => {
          const isUp = product.change?.dir === "up";
          const isFlat = product.change?.dir === "flat";
          console.log(product);
          return (
            <div
              key={product.id || index}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              className="px-4 border-r border-gray-300 text-[13px] md:text-sm text-gray-800"
            >
              <span className="text-[16px]">{product.categoryIcon}</span>
              <span className="text-[15px]">{product.nameBn}</span>
              <span>
                {product.today} টাকা/
                {product.unit === "kg" ? "কেজি" : product.unit}
              </span>
              {product.change && (
                <span
                  className={`flex items-center gap-0.5 text-[12px] md:text-[13px] font-semibold ${
                    isFlat
                      ? "text-gray-500"
                      : isUp
                        ? "text-red-600"
                        : "text-green-600"
                  }`}
                >
                  {isFlat ? "—" : isUp ? "▲" : "▼"}
                  {Math.abs(product.change.pct)}%
                </span>
              )}
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default MarqueeClient;
