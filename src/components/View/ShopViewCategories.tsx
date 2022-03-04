import { CustomRangeSlider } from "@/components/Algolia/AlgoliaPriceRange";
import { RatingsList } from "@/components/Algolia/RatingsRefinementList";
import CustomRefinementList from "@/components/Algolia/CustomRefinementList";
import CustomMenu from "@/components/Algolia/CustomMenu";

export default function ShopViewCategories() {
  return (
    <aside className="w-1/4 -mt-24">
      <div
        className="bg-white w-100 rounded-t-lg shadow-lg p-10"
        id="shop-sidebar"
      >
        <div className="sm:hidden offcanvas-header items-center shadow-sm">
          <h2 className="h5 mb-0">Filters</h2>
          <button
            className="btn-close ms-auto"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="close"
          ></button>
        </div>
        <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
          <CustomMenu attribute="product_type" title="Product Type" />
          <CustomRefinementList attribute="vendor" title="Vendors" />
          <CustomRefinementList attribute="tags" title="Tags" />
          <CustomRangeSlider attribute="price" />
          <RatingsList attribute="rating" />
        </div>
      </div>
    </aside>
  );
}
