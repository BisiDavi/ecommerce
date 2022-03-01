import { findResultsState } from "react-instantsearch-dom/server";
import { withRouter } from "next/router";
import algoliasearch from "algoliasearch/lite";
import qs from "qs";
import isEqual from "react-fast-compare";
import { Component } from "react";

import ShoppingView from "@/components/View/ShoppingView";
import Applayout from "@/layout/Applayout";

const updateAfter = 700;

function getCategorySlug(name) {
  return name.split(" ").map(encodeURIComponent).join("+");
}

const searchClient = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
);

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
    ? `${getCategorySlug(state.menu.product_type)}/`
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
  return `/search/${categoryPath}${queryString}`;
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

class Shopping extends Component {
  state = {
    searchState: this.props.searchState,
    lastRouter: this.props.router,
  };

  static async getInitialProps({ asPath }) {
    const searchState = pathToSearchState(asPath);
    const resultsState = await findResultsState(ShoppingView, {
      ...DEFAULT_PROPS,
      searchState,
    });

    return {
      resultsState,
      searchState,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //
  //
  //     "isEqual(state.lastRouter, props.router)",
  //     !isEqual(state.lastRouter, props.router)
  //   );
  //   if (!isEqual(state.lastRouter, props.router)) {
  //     return {
  //       searchState: pathToSearchState(props.router.asPath),
  //       lastRouter: props.router,
  //     };
  //   }

  //   return null;
  // }

  onSearchStateChange = (searchState) => {
    clearTimeout(this.debouncedSetState);

    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToURL(searchState);

      this.props.router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    this.setState({ searchState });
  };

  render() {
    return (
      <Applayout title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers">
        <ShoppingView
          {...DEFAULT_PROPS}
          searchState={this.state.searchState}
          resultsState={this.props.resultsState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={createURL}
        />
      </Applayout>
    );
  }
}

export default withRouter(Shopping);
