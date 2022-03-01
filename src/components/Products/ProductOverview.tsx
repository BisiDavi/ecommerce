import ProductBanner from "@/components/Banner/ProductBanner";
import ProductDescription from "@/components/Products/ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import ProductReviews from "./ProductReviews";

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  return (
    <div>
      <ProductBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
      <ProductReviews product={pageProduct} />
      {/* <SingleShopProductCarousel1
        product={pageProduct}
        otherProducts={products}
      /> */}
    </div>
  );
}
