import { CustomRangeSlider } from "@/components/Algolia/AlgoliaPriceRange";
import AttributeRefinementList from "@/components/Algolia/AttributeRefinementList";
import { TagsRefinementList } from "@/components/Algolia/TagsRefinementList";
import { SingleVendorRefinementList } from "@/components/Algolia/SingleVendorRefinementList";
import { RatingsList } from "@/components/Algolia/RatingsRefinementList";
import MarketplaceCategoryMenu from "@/components/Algolia/MarketplaceCategoryMenu";

export default function ShopViewCategories() {
  return (
    <aside className="w-1/4 -mt-20">
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
          <MarketplaceCategoryMenu
            searchable={true}
            attribute="product_type"
            showMoreLimit={100}
            showMore={true}
          />
          <SingleVendorRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="vendor"
          />
          <TagsRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="tags"
          />
          <CustomRangeSlider attribute="price" />
          <RatingsList attribute="rating" />
        </div>
      </div>
      <style jsx>
        {`
          .categoryCanvas {
            max-width: 22rem;
          }
        `}
      </style>
    </aside>
  );
}
