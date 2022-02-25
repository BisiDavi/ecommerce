/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from ".";
import useMutationAction from "./useMutationAction";

export default function useShoppingCart() {
  const { useRemoveFromCart, useAddItemToCartModal, useUpdateCartItem } =
    useMutationAction();
  const { loadToast, successToast, errorToast } = useToast();
  const { useAddItemToCart } = useMutationAction();
  const removeCartItem = useRemoveFromCart();
  const addItemToCart = useAddItemToCart();
  const addItemToCartModal = useAddItemToCartModal();
  const updateCartItem = useUpdateCartItem();

  function loadingState(mutator: any, data: string) {
    mutator.isLoading
      ? loadToast()
      : mutator.isError
      ? errorToast("an error occured, please try again")
      : mutator.isSuccess
      ? successToast(data)
      : null;
  }

  return {
    addItemToCart,
    removeCartItem,
    addItemToCartModal,
    updateCartItem,
    loadingState,
  };
}
