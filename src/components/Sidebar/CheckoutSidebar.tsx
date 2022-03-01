/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Button } from "@/components/UIElement";
import FormattedPrice from "@/lib/formatPrice";
import { cartType, itemType } from "@/types";
import useCoupon from "@/hooks/useCoupon";

interface CheckoutSidebarProps {
  cart: cartType | null;
}

function OrderSummaryItem({ item }: any) {
  return (
    <div className="flex items-center py-2 border-b-4">
      <Link href={`/products/${item.product.slug}`} passHref>
        <a className="d-block flex-shrink-0">
          <img
            src={item.product.images[0].file.url}
            alt={item.product.name}
            width="64"
          />
        </a>
      </Link>
      <div className="ps-2">
        <h6 className="widget-product-title">
          <Link href={`/products/${item.product.slug}`} passHref>
            <a>{item.product.name}</a>
          </Link>
        </h6>
        <div className="widget-product-meta flex align-items-baseline">
          <span className="text-accent me-2">
            <FormattedPrice price={item.price} />
          </span>
          <span className="text-muted">x {item.quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSidebar({ cart }: CheckoutSidebarProps) {
  const { loading, couponInputHandler, onSubmitCoupon } = useCoupon();

  return (
    <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
      <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
        <div className="py-2 px-xl-2">
          <div className="widget mb-3">
            <h2 className="widget-title text-center">Order summary</h2>
            <div className="products-list flex flex-col">
              {cart &&
                cart.items.map((item: itemType, index: number) => (
                  <OrderSummaryItem
                    key={`${item.productId}-${index}}`}
                    item={item}
                  />
                ))}
            </div>
          </div>
          {cart && (
            <ul className="list-unstyled fs-sm pb-2 border-b-4">
              <li className="flex justify-between items-center">
                <span className="me-2">Subtotal:</span>
                <span className="text-end">
                  <FormattedPrice price={cart.subTotal} />
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="me-2">Shipping:</span>
                <span className="text-end">
                  <FormattedPrice price={cart.shipmentTotal} />
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="me-2">Taxes:</span>
                <span className="text-end">
                  <FormattedPrice price={cart.taxTotal} />
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="me-2">Discount:</span>
                <span className="text-end">
                  <FormattedPrice price={cart.discountTotal} />
                </span>
              </li>
            </ul>
          )}
          {cart && (
            <h3 className="fw-normal text-center my-4">
              <FormattedPrice price={cart.grandTotal} />
            </h3>
          )}
          <form onSubmit={onSubmitCoupon} className="needs-validation">
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                onChange={couponInputHandler}
                placeholder="Promo code"
                required
              />
              <div className="invalid-feedback">Please provide promo code.</div>
            </div>
            <Button
              className="btn btn-outline-primary d-block w-100"
              loading={loading}
              disable={loading}
              text="Apply promo code"
              type="submit"
            />
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .products-list {
            overflow: auto;
            max-height: 470px;
          }
        `}
      </style>
    </aside>
  );
}
