import { useQuery } from "react-query";
import useToast from "@/hooks/useToast";
import useSwellCart from "@/hooks/useSwellCart";
import { useAppDispatch } from "@/redux/store";
import { toggleSlideCart } from "@/redux/ui-slice";

export default function useCart() {
  const { isLoading, isSuccessful, hasError } = useToast();
  const { applyGiftCode, getACart } = useSwellCart();
  const dispatch = useAppDispatch();

  const useCartData = () => useQuery("cart", getACart);

  function toggleCart() {
    dispatch(toggleSlideCart());
  }

  function applyDiscountCode(code: string) {
    const loading = isLoading();
    return applyGiftCode(code)
      .then((response) => {
        isSuccessful(loading, response?.message);
        console.log("response", response);
        return response;
      })
      .catch((error) => {
        console.error("error", error);
        hasError(loading, error?.message);

        return error;
      });
  }

  return {
    toggleCart,
    applyDiscountCode,
    useCartData,
  };
}
