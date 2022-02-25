import { useQueryClient } from "react-query";
import useCategory from "@/hooks/useCategory";
import useCurrency from "./useCurrency";
import useAccount from "@/hooks/useAccount";
import useSwellCart from "./useSwellCart";

export default function usePrefetch() {
  const { listEnabledCurrencies } = useCurrency();
  const { listAllCategory } = useCategory();
  const { getUserAccount } = useAccount();
  const { getACart } = useSwellCart();

  const queryClient = useQueryClient();

  async function getCategories() {
    await queryClient.prefetchQuery("listAllCategory", listAllCategory);
  }

  async function fetchCurrencies() {
    await queryClient.prefetchQuery("currencies", listEnabledCurrencies);
  }

  async function getUserAccountDetails() {
    await queryClient.prefetchQuery("getAccount", getUserAccount);
  }

  async function getCart() {
    await queryClient.prefetchQuery("getCart", getACart);
  }

  return {
    getCategories,
    fetchCurrencies,
    getUserAccountDetails,
    getCart,
  };
}
