import { useQuery } from "react-query";

import useSwellProducts from "@/hooks/useSwellProducts";
import ProductBanner from "@/components/Banner/ProductBanner";
import ProductDescription from "@/components/Products/ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import ProductReviews from "./ProductReviews";
import RelatedProductSlider from "@/components/Slider/RelatedProductSlider";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  const { getProductsInCategory } = useSwellProducts();
  const { data, status } = useQuery("getProductsInCategory", () =>
    getProductsInCategory(pageProduct.product_type)
  );
  return (
    <>
      <ProductBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
      <ProductReviews product={pageProduct} />
      {status === "error" ? (
        ""
      ) : status === "loading" ? (
        <SpinnerRipple />
      ) : (
        <RelatedProductSlider relatedProducts={data.results} />
      )}
    </>
  );
}
