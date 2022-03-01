import { InstantSearch } from "react-instantsearch-dom";
import Link from "next/link";
import { Configure } from "react-instantsearch-dom";

import AlgoliaCurrentRefinement from "@/components/Algolia/AlgoliaCurrentRefinement";
import ShopViewCategories from "@/components/View/ShopViewCategories";
import ShopBannerToolbar from "@/components/Banner/ShopBannerToolbar";
import InfiniteProductHits from "@/components/Algolia/InfiniteHits";

interface ShopViewProps {
  searchState: any;
  onSearchStateChange: (updatedSearchState: string) => void;
  createURL: (state: any) => void;
  searchClient: any;
  resultsState?: any;
  onSearchParameters: () => void;
  indexName: string;
}

export default function ShoppingView(
  props: any,
  {
    searchState,
    onSearchStateChange,
    createURL,
    resultsState,
    onSearchParameters,
    indexName,
    searchClient,
  }: ShopViewProps
) {
  return (
    <InstantSearch
      searchClient={searchClient}
      resultsState={resultsState}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
      indexName={indexName}
      onSearchParameters={onSearchParameters}
      {...props}
    >
      <Configure
        hitsPerPage={9}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <AlgoliaCurrentRefinement />
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/" passHref>
                    <a className="text-nowrap">Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap active">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <ShopViewCategories />
        <section className="w-2/3">
          {typeof window !== "undefined" && <ShopBannerToolbar />}
          <div>
            <div className="flex flex-wrap">
              {typeof window !== "undefined" && (
                <InfiniteProductHits minHitsPerPage={9} animation={true} />
              )}
            </div>
            <hr className="mb-2" />
          </div>
        </section>
      </div>
    </InstantSearch>
  );
}
