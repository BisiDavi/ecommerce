import { CustomRangeSlider } from "@/components/Algolia/AlgoliaPriceRange";
import AttributeRefinementList from "@/components/Algolia/AttributeRefinementList";
import { RatingsList } from "@/components/Algolia/RatingsRefinementList";
import { SingleVendorRefinementList } from "@/components/Algolia/SingleVendorRefinementList";
import { TagsRefinementList } from "@/components/Algolia/TagsRefinementList";

interface props {
  vendorView: boolean;
}

export default function VendorCategory({ vendorView }: props) {
  return (
    <aside className="col-lg-3">
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
          {vendorView ? (
            <SingleVendorRefinementList
              showMoreLimit={100}
              showMore={true}
              searchable={true}
              attribute="vendor"
            />
          ) : (
            <AttributeRefinementList
              showMoreLimit={100}
              showMore={true}
              searchable={true}
              attribute="vendor"
              title="Vendor"
            />
          )}
          <TagsRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="tags"
          />
          {/* <AttributeRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="tags"
            title="Tags"
          /> */}
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
