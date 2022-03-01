/* eslint-disable @next/next/no-img-element */
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
  indexName: string;
  searchClient: any;
}

export default function ShopView({
  searchState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
}: ShopViewProps) {
  return (
    <InstantSearch
      indexName={indexName}
      searchClient={searchClient}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
    >
      <Configure
        hitsPerPage={9}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <div className="w-full flex bg-gray-700 justify-between py-14">
        <div className="container m-auto mb-3 mb-lg-0 pt-lg-2 flex items-center justify-between">
          <nav aria-label="w-1/2 items-center breadcrumb flex bg-gray-700 ">
            <ol className="breadcrumb text-white flex flex-nowrap justify-center">
              <li className="breadcrumb-item hover:text-red-500">
                <Link href="/" passHref>
                  <a className="text-nowrap">Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item mx-2">
                <span> &gt; </span>
              </li>
              <li className="breadcrumb-item text-nowrap active">Shop</li>
            </ol>
            <AlgoliaCurrentRefinement />
          </nav>
          <ShopBannerToolbar />
        </div>
      </div>
      <div className="container flex pb-5 mb-2 mb-md-4">
        <ShopViewCategories />
        <section className="w-3/4 flex flex-col">
          <div className="flex flex-wrap">
            <InfiniteProductHits minHitsPerPage={9} animation={true} />
          </div>
          <hr className="mb-2" />
        </section>
      </div>
    </InstantSearch>
  );
}
