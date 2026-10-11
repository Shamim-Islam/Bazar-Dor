import ProductCard from "../ProductCard";

const IncreaseProducts = ({ products = [] }) => {
  const increasedProducts = products.filter(
    (product) => product.change?.dir === "up",
  );

  return (
    <section className="mb-6 sm:mb-7 p-4 md:p-8 lg:p-0">
      <h2 className="mb-4 flex items-center gap-2 text-xl lg:text-2xl font-bold text-gray-800 ">
        <span className="text-red-600">▲</span>
        আজ দাম বেড়েছে
      </h2>

      {increasedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {increasedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-3 text-xs text-gray-500 sm:p-4 sm:text-sm">
          আজ কোনো পণ্যের দাম বাড়েনি।
        </p>
      )}
    </section>
  );
};

export default IncreaseProducts;
