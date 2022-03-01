import Link from "next/link";

import Image from "@/components/Image";
import { productType } from "@/types";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useShoppingCart from "@/hooks/useShoppingCart";
import ProductListView from "./ProductListView";

interface ProductProps {
  product: productType;
}

export default function ProductList({ product }: ProductProps) {
  const { itemViewed } = useAlgoliaEvents();
  const { loadingState, addItemToCart } = useShoppingCart();

  loadingState(addItemToCart, `${product.name} added to cart`);

  function productViewedHandler() {
    itemViewed("product_viewed", [product.objectID]);
  }

  return (
    <div className="card product-card  product-list mb-3 border-b-4 justify-center">
      <span className="badge bg-danger badge-shadow">Sale</span>
      <button
        className="btn-wishlist btn-sm"
        type="button"
        aria-label="Add to Wishlist"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Add to wishlist"
      >
        <i className="ci-heart"></i>
      </button>
      <div className="d-sm-flex items-center">
        <Link href={`/products/${product.slug}`} passHref>
          <a onClick={productViewedHandler} className="product-list-thumb">
            <Image
              height={300}
              width={300}
              src={product.images[0]?.file?.url}
              alt={
                product?.image_alt_text
                  ? product?.image_alt_text[0]
                  : product.name
              }
              className="productImage"
              placeholder="blur"
              blurDataURL={product.images[0]?.file?.url}
              loading="lazy"
            />
          </a>
        </Link>
        <ProductListView product={product} />
      </div>
    </div>
  );
}
