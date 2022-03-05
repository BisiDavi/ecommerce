import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateDefaultRefinement } from "@/redux/algolia-slice";
import { useEffect } from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const CustomCurrentRefinements = ({ items, refine, createURL }: any) => {
  const dispatch = useAppDispatch();
  const { defaultRefinement } = useAppSelector((state) => state.algolia);
  function clearRefinement(item: string) {
    if (item === defaultRefinement) {
      dispatch(updateDefaultRefinement(null));
    }
  }
  return (
    <ul className="currentRefinement">
      {items.map((item: any) => (
        <li className="list" key={item.label}>
          {item.items ? (
            <div>
              {categoryName(item.id)}
              <ul>
                {item.items.map((nested: any) => (
                  <li key={nested.label}>
                    <a
                      href={createURL(nested.value)}
                      onClick={(event) => {
                        event.preventDefault();
                        refine(nested.value);
                      }}
                    >
                      {`${nested.label}`}
                    </a>
                    <span className="mx-1 text-white">x</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <a
              href={createURL(item.value)}
              className="price"
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
                clearRefinement(item.currentRefinement);
              }}
            >
              {`${categoryName(item.id)}: ${item.currentRefinement}`}
              <span className="mx-1 text-white">x</span>
            </a>
          )}
        </li>
      ))}
      <style jsx>
        {`
          ul.currentRefinement ul li,
          .price {
            margin: 0px 10px;
            border: 1px solid white;
            padding: 1px 15px;
            border-radius: 50px;
          }
          ul.currentRefinement ul li:hover,
          .price:hover {
            background-color: red;
            color: white;
            border: none;
          }
          .list {
            display: flex;
            align-items: center;
            margin: 0px 20px;
          }
          .list div {
            display: flex;
            align-items: center;
          }
          .list a:hover {
            color: white;
          }
          ul.currentRefinement ul {
            list-style: none;
            display: flex;
            padding: 0;
          }
          ul.currentRefinement {
            display: flex;
            align-items: center;
            padding: 0;
            list-style: none;
            color: white;
          }
        `}
      </style>
    </ul>
  );
};

function categoryName(label: string) {
  console.log("label", label);
  switch (label) {
    case "product_type":
      return "Category";
    case "vendor":
      return "Vendor";
    case "price":
      return "Price";
    case "rating":
      return "Rating";
    case "tags":
      return "Tags";
    default: {
      return "";
    }
  }
}

const AlgoliaCurrentRefinements = connectCurrentRefinements(
  CustomCurrentRefinements
);

export default AlgoliaCurrentRefinements;
