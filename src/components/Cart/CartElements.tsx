import { MdOutlineDelete } from "react-icons/md";
import useCoupon from "@/hooks/useCoupon";
import { Button } from "@/components/UIElement";
import styles from "@/styles/ui.module.css";
import useShoppingCart from "@/hooks/useShoppingCart";
import { updateStoreCartItem } from "@/redux/store-cart-slice";
import useMutationAction from "@/hooks/useMutationAction";
import { useCart } from "@/hooks";

interface cartControlProps {
  item: any;
}

export function CartControl({ item }: cartControlProps) {
  const stepValue = item?.metadata?.attributes?.box ? 10 : 1;
  const minValue = item?.metadata?.attributes?.box ? 10 : 1;

  const { loadingState, updateCartItem } = useShoppingCart();

  loadingState(updateStoreCartItem, `${item.product.name} updated`);

  function updateItemQuantity(e: any) {
    updateCartItem.mutate({ product: item, quantity: e.target.value });
  }
  return (
    <div>
      <div className="flex align-items-center">
        <label
          htmlFor="itemQuantity"
          className="itemQuantity fw-normal me-1 text-muted"
        >
          Quantity:
        </label>
        <input
          onClick={updateItemQuantity}
          className="form-control my-2 py-1 text-center text-dark"
          type="number"
          id="itemQuantity"
          min={minValue}
          defaultValue={item.quantity}
          step={stepValue}
          max={90}
        />
      </div>
      <style jsx>
        {`
          .itemQuantity {
            font-size: 13px;
          }
          .cartControl button {
            height: 30px;
            width: 30px;
            color: black;
            padding: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .cartControl button:hover {
            border: 1px solid black !important;
          }
          .cartControl input:hover {
            background-color: #f5f5f5;
          }
          #itemQuantity {
            width: 80px;
          }
        `}
      </style>
    </div>
  );
}

export function ClearCart() {
  const { useDeleteCart } = useMutationAction();
  const deleteCart = useDeleteCart();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  return (
    <div className="flex mt-4 mb-0">
      <button
        onClick={() => deleteCart.mutate(cart.id)}
        className="btn-link btn-danger rounded-2 px-2 py-1 m-auto justify-content-center flex align-items-center remove"
      >
        <MdOutlineDelete fontSize={25} className="mr-2" />
        <p className="mb-0">Clear Cart</p>
      </button>
      <style jsx>
        {`
          .remove:hover {
            color: red;
          }
        `}
      </style>
    </div>
  );
}

export function CartDiscount({ cartItem }: any) {
  const { loading, couponInputHandler, onSubmitCoupon } = useCoupon();

  return (
    <form
      onSubmit={onSubmitCoupon}
      className={`${styles.cartDiscount} flex-col flex justify-content-end`}
    >
      <p className="mb-0 mt-2 align-right">Applied discounts</p>
      <h6>{cartItem?.shipping}</h6>
      <div className="justify-content-end flex my-2">
        <input
          className="discountInput mx-2 border px-4"
          onChange={couponInputHandler}
          placeholder="Enter discount code"
          required
        />
        <Button
          className="btn"
          loading={loading}
          disable={loading}
          text="ADD"
          type="submit"
        />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          input.discountInput {
            padding: 10px !important;
            font-size: 12px;
          }
        }
      `}</style>
    </form>
  );
}
