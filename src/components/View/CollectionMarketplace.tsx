import { Configure } from "react-instantsearch-dom";
import Link from "next/link";

import Categories from "@/components/Category/Categories";
import ShopBannerToolbar from "@/components/Banner/ShopBannerToolbar";
import InfiniteProductHits from "@/components/Algolia/InfiniteHits";
import CollectionCurrentRefinements from "@/components/Algolia/CollectionCurrentRefinement";
import { AlgoliaView } from "@/components/Algolia/AlgoliaInstantSearch";

interface MarketplaceProps {
  collection?: {
    name: string;
    slug: string;
  };
}

export default function CollectionMarketplace({
  collection,
}: MarketplaceProps) {
  return (
    <AlgoliaView>
      <Configure
        hitsPerPage={15}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <CollectionCurrentRefinements />
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/" passHref>
                    <a className="text-nowrap">Home</a>
                  </Link>
                </li>
                {collection ? (
                  <li className="breadcrumb-item text-nowrap active">
                    {collection?.name}
                  </li>
                ) : (
                  <li className="breadcrumb-item text-nowrap active">
                    <a>Shop</a>
                  </li>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <Categories categoryMarketplace />
        <section className="w-2/3">
          <ShopBannerToolbar />
          <div>
            <div className="flex flex-wrap">
              <InfiniteProductHits minHitsPerPage={30} animation={true} />
            </div>
            <hr className="mb-2" />
          </div>
        </section>
      </div>
    </AlgoliaView>
  );
}
