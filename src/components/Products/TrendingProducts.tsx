import Link from "next/link";
import { memo } from "react";

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
      <h2 className="text-center trending">Trending products</h2>
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
              />
            )
          )}
          <div className="text-center pt-1 mt-1 mb-3">
            <Link href="/shop" passHref>
              <a className="btn btn-outline-accent">
                More products<i className="ci-arrow-right ms-1"></i>
              </a>
            </Link>
          </div>
        </div>
      )}
      <style jsx>
        {`
          h2.trending {
            font-size: 24px;
          }
          @media (max-width: 768px) {
            h2.trending {
              font-size: 18px;
            }
          }
        `}
      </style>
    </section>
  );
}

const TrendingProducts = memo(TrendingProductsCatalog);

export default TrendingProducts;

// TrendingProducts.whyDidYouRender = true;
