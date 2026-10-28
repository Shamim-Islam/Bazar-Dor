import ProductCard from "../ProductCard";

const DecreaseProducts = ({ products = [] }) => {
  const decreasedProducts = products.filter(
    (product) => product.change?.dir === "down",
  );

  return (
    <section className="mb-6 sm:mb-7 lg:mb-12 p-4 md:p-8 lg:p-0">
      <h2 className="mb-4 flex items-center gap-2 text-[18px] lg:text-[22px] font-bold text-gray-800">
        <span className="text-green-600">▼</span>
        আজ দাম কমেছে
      </h2>

      {decreasedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {decreasedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-3 text-xs text-gray-500 sm:p-4 sm:text-sm">
          আজ কোনো পণ্যের দাম কমেনি।
        </p>
      )}
    </section>
  );
};

export default DecreaseProducts;
