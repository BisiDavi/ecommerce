import { useAppDispatch } from "@/hooks/useRedux";
import {
  updateMarketplaceCategory,
  resetMarketplaceCategory,
} from "@/redux/marketplace-category-slice";

export default function useMarketplaceCategory() {
  const dispatch = useAppDispatch();

  function selectedFooterCategory(category: string) {
    dispatch(resetMarketplaceCategory());
    dispatch(updateMarketplaceCategory(category));
  }

  return selectedFooterCategory;
}
