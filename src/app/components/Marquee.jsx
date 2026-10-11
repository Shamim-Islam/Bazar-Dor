import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { getProducts } from "@/lib/api";

const Marquee = async () => {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return <div className="px-4 text-sm text-gray-500">কোনো ডেটা নেই</div>;
  }

  return (
    <div className="w-full border-y border-gray-200 bg-[#f8f9fa] py-2">
      <div style={{ width: "100%", overflow: "hidden" }}>
        <MarqueeText
          duration={20}
          direction={"right"}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
          style={{ width: "100%" }}
        >
          {products.map((product, index) => {
            const isUp = product.change?.dir === "up";
            const isFlat = product.change?.dir === "flat";

            return (
              <div
                key={product.id || index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                className="border-r border-gray-300 px-4 text-[13px] text-gray-800 md:text-sm"
              >
                <span className="text-[16px]">{product.categoryIcon}</span>

                <span className="text-[15px]">{product.nameBn}</span>

                <span>
                  {product.today} টাকা/
                  {product.unit === "kg" ? "কেজি" : product.unit}
                </span>

                {product.change && (
                  <span
                    className={`flex items-center gap-0.5 text-[12px] font-semibold md:text-[13px] ${
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
    </div>
  );
};

export default Marquee;
