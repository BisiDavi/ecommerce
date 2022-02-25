import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  updateCheckoutProcess,
  updateLoadingStatus,
} from "@/redux/checkout-slice";
import { checkoutStageProcess } from "@/types";

export default function useCheckout() {
  const dispatch = useAppDispatch();
  const { loading, checkout } = useAppSelector((state) => state.checkout);

  function updateCheckoutHandler(CheckoutStage: checkoutStageProcess) {
    console.log("CheckoutStage", CheckoutStage);
    dispatch(updateCheckoutProcess(CheckoutStage));
  }

  return {
    updateCheckoutHandler,
    checkout,
  };
}
