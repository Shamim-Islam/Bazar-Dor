import IncreaseProducts from "./IncreaseProducts";
import DecreaseProducts from "./DecreaseProducts";
import AllProducts from "./AllProducts";
import { getProducts } from "@/lib/api";


const HomeProducts = async () => {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return <div className="px-4 text-sm text-gray-500">কোনো ডেটা নেই</div>;
  }
  return (
    <section className="bg-[#e8f5e9] py-6">
      <div className="max-w-7xl mx-auto">
        <IncreaseProducts products={products} />
        <DecreaseProducts products={products} />
        <AllProducts products={products} />
      </div>
    </section>
  );
};

export default HomeProducts;
