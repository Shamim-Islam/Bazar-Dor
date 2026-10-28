import ProductCard from "../ProductCard";

const AllProducts = ({ products = [] }) => {
  const formatPrice = (price) => new Intl.NumberFormat("bn-BD").format(price);

  return (
    <section className="mb-7 p-4 md:p-8 lg:p-0" id="সব-পণ্য">
      <h2 className="mb-2 text-[18px] lg:text-[22px] font-bold text-gray-800 ">
        সব পণ্য
      </h2>

      <p className="mb-3 text-sm text-gray-500">
        মোট {formatPrice(products.length)}টি পণ্যের বাজারদর
      </p>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">কোনো পণ্যের তথ্য পাওয়া যায়নি।</p>
      )}
    </section>
  );
};

export default AllProducts;
