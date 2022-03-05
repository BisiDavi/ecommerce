import { CustomRangeSlider } from "@/components/Algolia/AlgoliaPriceRange";
import AttributeRefinementList from "@/components/Algolia/AttributeRefinementList";
import { RatingsList } from "@/components/Algolia/RatingsRefinementList";
import CustomRefinementList from "@/components/Algolia/CustomRefinementList";
import CustomMenu from "@/components/Algolia/CustomMenu";

export default function VendorCategory() {
  return (
    <aside className="w-1/3">
      <div
        className="vendorCategoryCanvas offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
        id="shop-sidebar"
      >
        <div className="offcanvas-header align-items-center shadow-sm">
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
          <CustomRefinementList attribute="vendor" title="Vendor" />
          <CustomRefinementList attribute="tags" title="Tags" />

          <CustomRangeSlider attribute="price" />
          <RatingsList attribute="rating" />
        </div>
      </div>
      <style jsx>
        {`
          .vendorCategoryCanvas {
            max-width: 22rem;
          }
        `}
      </style>
    </aside>
  );
}
