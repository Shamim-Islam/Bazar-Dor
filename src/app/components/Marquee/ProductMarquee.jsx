import React from "react";
import MarqueeClient from "./MarqueeClient";

const productMarquee = async () => {
  const resData = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "no-store" },
  );

  if (!resData.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await resData.json();
  console.log("Fetched products:", products?.length, "items");
  return (
    <div className="w-full bg-[#f8f9fa] border-y border-gray-200 py-2">
      <MarqueeClient products={products} />
    </div>
  );
};

export default productMarquee;
