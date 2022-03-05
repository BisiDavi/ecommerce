import Link from "next/link";
import { memo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import Product from "@/components/Products";
import LoadProducts from "@/components/Loader/ProductsLoader";
import { useLiveHealthyProduct } from "@/hooks/useSwellProducts";
import useMediaQuery from "@/hooks/useMediaQuery";
import { productType } from "@/types";

function TrendingProductsCatalog() {
  const mobileView = useMediaQuery("(max-width:768px)");
  const { liveHealthyProduct, liveHealthyProductStatus } =
    useLiveHealthyProduct();

  function updateProductSize(productData: any[]) {
    const productSize = mobileView ? productData.slice(0, 14) : productData;
    return productSize;
  }

  return (
    <section className="container md:pt-3 pb-0 md:mb-3">
      <h2 className="text-center lg:text-3xl sm:text-xl font-bold capitalize">
        Trending products
      </h2>
      {liveHealthyProductStatus === "error" ? (
        <h1>unable to fetch products, Network issues</h1>
      ) : liveHealthyProductStatus === "loading" ? (
        <LoadProducts />
      ) : (
        <div className="flex flex-wrap pt-4 mx-2">
          {updateProductSize(liveHealthyProduct.data).map(
            (product: productType) => (
              <Product
                key={product.id}
                product={product}
                algoliaEvent="click"
                homepage
              />
            )
          )}
          <div className="my-4 m-auto">
            <Link href="/shop" passHref>
              <a className="bg-red-500 items-center flex text-center p-2 border-2 rounded-lg text-white hover:border-red-500 hover:bg-white hover:text-red-500">
                More products
                <AiOutlineArrowRight className="ml-1" />
              </a>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

const TrendingProducts = memo(TrendingProductsCatalog);

export default TrendingProducts;

// TrendingProducts.whyDidYouRender = true;
