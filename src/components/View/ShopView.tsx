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
      <div className="w-full flex bg-gray-700 justify-between h-52">
        <div className="container m-auto mb-3 mb-lg-0 pt-lg-2 flex flex-col h-32 relative">
          <nav className="w-full items-start  justify-start flex bg-gray-700 ">
            <ol className="text-white lg:flex justify-center lg:justify-start">
              <li className="mb-0">
                <Link href="/" passHref>
                  <a className="hover:text-red-500">Home</a>
                </Link>
              </li>
              <li className="mx-2">
                <span> &gt; </span>
              </li>
              <li className="text-nowrap active">Shop</li>
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
