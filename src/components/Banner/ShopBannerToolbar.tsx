import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateProductView } from "@/redux/shop-slice";
import AlgoliaSortby from "@/components/Algolia/AlgoliaSortby";
import { IoGridOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
export default function ShopBannerToolbar() {
  const dispatch = useAppDispatch();
  const { productView } = useAppSelector((state) => state.shop);

  const gridStyle = productView === "grid" ? "bg-light" : "nav-link-light";
  const listStyle = productView === "list" ? "bg-light" : "nav-link-light";

  function updateView(viewType: "grid" | "list") {
    dispatch(updateProductView(viewType));
  }
  return (
    <div className="ShopBannerToolbar w-3/4 flex justify-between pt-2 pb-4 place-self-end absolute bottom-0 pl-12">
      <AlgoliaSortby
        defaultRefinement="New_Livehealthy_products_index"
        items={[
          { value: "New_Livehealthy_products_index", label: "Featured" },
          { value: "New_Livehealthy_products_index_a-z", label: "Name A-Z" },
          { value: "New_Livehealthy_products_index_z-a", label: "Name Z-A" },
        ]}
      />
      <div className="flex pb-3">
        <span
          className={`rounded-lg mx-2 bg-white p-2 hover:bg-red-500 hover:text-white ${gridStyle} me-2 cursor-pointer`}
          onClick={() => updateView("grid")}
        >
          <IoGridOutline />
        </span>
        <span
          onClick={() => updateView("list")}
          className={`rounded-lg mx-2 bg-white hover:bg-red-500 hover:text-white p-2 ${listStyle} cursor-pointer`}
        >
          <AiOutlineBars />
        </span>
      </div>
    </div>
  );
}
