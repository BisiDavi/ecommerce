import { findResultsState } from "react-instantsearch-dom/server";
import { useRouter } from "next/router";
import qs from "qs";
import isEqual from "react-fast-compare";
import { useEffect, useState, useRef } from "react";

import searchClient from "@/lib/algoliaConfig";
import ShoppingView from "@/components/View/ShoppingView";
import Applayout from "@/layout/Applayout";

const updateAfter = 700;

function getCategorySlug(name) {
  return name.split(" ").map(encodeURIComponent).join("+");
}

function getCategoryName(slug) {
  return slug.split("+").map(decodeURIComponent).join(" ");
}

const createURL = (state) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList.vendor.length === 0 &&
    state.refinementList.tags.length === 0 &&
    state.menu &&
    !state.menu.product_type;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu.product_type
    ? `${ getCategorySlug(state.menu.product_type)}/`
    : "";
  const queryParameters = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.refinementList.vendor) {
    queryParameters.vendor =
      state.refinementList.vendor.map(encodeURIComponent);
  }

  if (state.refinementList.tags) {
    queryParameters.tags = state.refinementList.tags.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });
  return `search/${categoryPath}${queryString}`;
};

const pathToSearchState = (location) => {
  const locationSplitted = location ? location.split("/?")[1] : "";
  const searchPath = locationSplitted
    ? locationSplitted.split("/search")[1]
    : "";
  const categoryPath = searchPath ? searchPath.replace(/\//g, "") : "";
  const category = getCategoryName(categoryPath || "");

  const attributePath = location ? location.slice("2").split("?")[1] : "";

  const {
    query = "",
    page = 1,
    vendor = [],
    tags = [],
  } = qs.parse(attributePath);
  const allVendors = Array.isArray(vendor) ? vendor : [vendor].filter(Boolean);
  const allTags = Array.isArray(tags) ? tags : [tags].filter(Boolean);

  return {
    query: decodeURIComponent(query),
    page,
    menu: {
      product_type: decodeURIComponent(category),
    },
    refinementList: {
      vendor: allVendors.map(decodeURIComponent),
      tags: allTags.map(decodeURIComponent),
    },
  };
};
const searchStateToURL = (searchState) =>
  searchState ? `${window.location.pathname}?${createURL(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

export default function ShopNow(props) {
  const router = useRouter();
  const [searchState, setSearchState] = useState(props.searchState);
  const [lastRouter, setlastRouter] = useState(router);
  const debouncedSetStateRef = useRef(null);

  useEffect(() => {
    if (!isEqual(lastRouter, router)) {
      setSearchState(router.asPath);
      setlastRouter(router);
    }
    return null;
  }, [router, lastRouter]);

  function onSearchStateChange(searchState) {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToURL(searchState);

    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    setSearchState(searchState);
  }

  return (
    <Applayout title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers">
      <ShoppingView
        {...DEFAULT_PROPS}
        searchState={searchState}
        resultsState={props.resultsState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      />
    </Applayout>
  );
}

ShopNow.getInitialProps = async ({ asPath }) => {
  const searchState = pathToSearchState(asPath);
  const resultsState = await findResultsState(ShoppingView, {
    ...DEFAULT_PROPS,
    searchState,
  });

  return {
    resultsState,
    searchState,
  };
};
