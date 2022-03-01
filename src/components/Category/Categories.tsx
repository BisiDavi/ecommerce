import { CustomRangeSlider } from "@/components/Algolia/AlgoliaPriceRange";
import  CategoriesRefinementList  from "@/components/Algolia/CategoriesRefinementList";
import { RatingsList } from "@/components/Algolia/RatingsRefinementList";
import MarketplaceCategoryMenu from "@/components/Algolia/MarketplaceCategoryMenu";
import { SingleVendorRefinementList } from "@/components/Algolia/SingleVendorRefinementList";
import { TagsRefinementList } from "@/components/Algolia/TagsRefinementList";

interface CategoriesProps {
  categoryMarketplace?: boolean;
}

export default function Categories({ categoryMarketplace }: CategoriesProps) {
  return (
    <aside className="col-lg-3">
      <div
        className="categoryCanvas offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
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
          {categoryMarketplace ? (
            <MarketplaceCategoryMenu
              searchable={true}
              attribute="product_type"
            />
          ) : (
            <CategoriesRefinementList
              showMoreLimit={100}
              showMore={true}
              searchable={true}
              attribute="product_type"
            />
          )}
          <SingleVendorRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="vendor"
          />
          {/* <AttributeRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="tags"
            title="Tags"
          /> */}
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
