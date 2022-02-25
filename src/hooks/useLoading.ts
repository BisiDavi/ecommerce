import { updateLoadingAction } from "@/redux/ui-slice";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "./useRedux";

export default function useLoading() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.UI);

  function updateLoadingState() {
    dispatch(updateLoadingAction());
  }
  return {
    loading,
    updateLoadingState,
  };
}
