import { Highlight, connectRefinementList } from "react-instantsearch-dom";
import { FiSearch } from "react-icons/fi";
import LoadCategorySidebar from "@/components/Loader/CategorySidebarLoader";

export function TagsList({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
}: any) {
  function searchItems(e: any) {
    searchForItems(e.currentTarget.value);
  }

  function refineSearch(e: any, item: any) {
    e.preventDefault();
    refine(item.value);
  }
  return (
    <div className="widget-categories mb-4 pb-4 border-b-2">
      <h3 className="mb-2 text-xl font-medium">Tags</h3>
      <div className="relative flex mb-1">
        <input
          className="border-2 w-full h-10 focus:border-red-500 border-gray-200 rounded-lg px-4 text-sm mb-2"
          type="text"
          onChange={searchItems}
          placeholder="Search..."
        />
        <FiSearch size={25} className="text-red-500 absolute right-4 top-2" />
      </div>
      <div className="accordion mt-n1" id="shop-categories">
        {items?.length > 0 ? (
          items.map((item: { label: string; value: string; count: number }) => (
            <div key={item.label} className="accordion-item my-4">
              <a onClick={(e) => refineSearch(e, item)}>
                {isFromSearch ? (
                  <Highlight attribute="label" hit={item} />
                ) : (
                  <>
                    {item.label}
                    <span className="ml-4 bg-red-500 rounded-full px-3 py-1 h-4 hover:bg-red-700 text-sm text-white">
                      {item.count}
                    </span>
                  </>
                )}
              </a>
            </div>
          ))
        ) : (
          <LoadCategorySidebar />
        )}
      </div>
      <style jsx>
        {`
          a.cat-link {
            font-size: 0.9375rem;
            color: #4b566b;
            font-weight: normal;
          }
          a:hover {
            color: #fe696a;
          }
          a.badge {
            font-size: 0.75rem;
            font-weight: normal;
            color: white;
          }
          .accordion {
            scrollbar-width: thin;
            scrollbar-color: darkgrey slategrey;
            max-height: 400px;
            overflow-y: auto;
          }
          .accordion::-webkit-scrollbar {
            width: 8px;
          }
          .accordion::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }
          .accordion::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
            border: 0px;
          }
        `}
      </style>
    </div>
  );
}

export const TagsRefinementList = connectRefinementList(TagsList);
