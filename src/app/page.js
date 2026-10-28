import { Suspense } from "react";
import Banner from "./components/(home)/Banner";
import HomeProducts from "./components/(home)/HomeProducts";
import ProductsLoading from "./components/(home)/ProductsLoading";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<ProductsLoading />}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}
