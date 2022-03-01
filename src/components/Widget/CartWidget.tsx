import Link from "next/link";

import FormattedPrice from "@/lib/formatPrice";
import Image from "@/components/Image";
import useShoppingCart from "@/hooks/useShoppingCart";
import { cartType } from "@/types";

interface CartWidgetProps {
  cart: cartType;
}

export default function CartWidget({ cart }: CartWidgetProps) {
  const { loadingState, removeCartItem } = useShoppingCart();

  loadingState(removeCartItem, `${cart.product.name} removed`);

  function removeItemFromCart() {
    removeCartItem.mutate(cart);
    // removeVboutCartItem({
    //   cartId: cart.id,
    //   productId: cart.productId,
    // });
  }

  return (
    <div className="widget-cart-item py-2 border-b-4">
      <button
        className="btn-close text-danger"
        type="button"
        onClick={removeItemFromCart}
        aria-label="remove"
      >
        <span>&times;</span>
      </button>
      <div className="flex items-center">
        <Link href={`/products/${cart.product.slug}`} passHref>
          <a className="flex-shrink-0">
            <Image
              src={cart.product.images[0].file.url.split(";")[0]}
              alt={cart.product.name}
              width={64}
              height={64}
            />
          </a>
        </Link>
        <div className="ps-2">
          <h6 className="widget-product-title">
            <Link href={`/products/${cart.product.slug}`} passHref>
              <a>{cart.product.name}</a>
            </Link>
          </h6>
          <div className="widget-product-meta flex align-items-baseline">
            <span className="text-accent me-2">
              <FormattedPrice price={cart?.price} />
            </span>
            <span className="text-muted">x {cart.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
