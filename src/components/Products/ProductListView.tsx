import Link from "next/link";
import dynamic from "next/dynamic";

import FormattedPrice from "@/lib/formatPrice";
import RatingStar from "@/components/Rating/RatingStar";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useShoppingCart from "@/hooks/useShoppingCart";

const ProductListQuickView = dynamic(() => import("./ProductListQuickView"));

export default function ProductListView({ product }: any) {
  const { itemViewed } = useAlgoliaEvents();
  const { loadingState, addItemToCart } = useShoppingCart();

  loadingState(addItemToCart, `${product.name} added to cart`);

  function productViewedHandler() {
    itemViewed("product_viewed", [product.objectID]);
  }
  return (
    <>
      <div className="card-body py-2">
        <a className="text-2xl font-medium mb-1">{product.vendor}</a>
        <h3 className="text-xl font-normal">
          <Link href={`/products/${product.slug}`} passHref>
            <a onClick={productViewedHandler}>{product.name}</a>
          </Link>
        </h3>
        <div className="flex justify-between">
          <div className="flex flex-col items">
            <FormattedPrice
              price={product.price}
              className="text-md font-bold"
              isProduct
            />
            {product.rrp && (
              <del>
                <FormattedPrice
                  price={product.rrp}
                  className="text-sm"
                  isProduct
                />
              </del>
            )}
          </div>
          <RatingStar rate={product.rating} />
        </div>
        <ProductListQuickView product={product} />
      </div>
      <style jsx>
        {`
          .card-body.card-body-hidden {
            height: 100%;
          }
        `}
      </style>
    </>
  );
}
