import { useEffect, useRef } from "react";
import { connectInfiniteHits } from "react-instantsearch-dom";
import { ProductHit, ProductHitList } from "@/components/Algolia/ProductHit";
import { useAppSelector } from "@/hooks/useRedux";
import { hitType } from "@/types";
import ShopLoader from "@/components/Loader/ShopLoader";

interface Props {
  hits: hitType[];
  hasMore: boolean;
  refineNext: () => void;
  minHitsPerPage: number;
  animation?: boolean;
}

function InfiniteHits({ hits, hasMore, refineNext }: Props) {
  const filterHits = hits.filter((fhits) => fhits.images.length !== 0);
  const { productView } = useAppSelector((state) => state.shop);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    function onSentinelIntersection(entries: any[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          refineNext();
        }
      });
    }

    let observer: any = new IntersectionObserver(onSentinelIntersection);
    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, refineNext, sentinelRef]);

  return (
    <>
      {filterHits.length > 0 ? (
        <div className="ais-InfiniteHits">
          <ul className="ais-InfiniteHits-list">
            {productView === "grid" ? (
              <ProductHit hits={filterHits} />
            ) : (
              <ProductHitList hits={filterHits} />
            )}

            <li className="ais-InfiniteHits-sentinel" ref={sentinelRef} />
          </ul>
          <style jsx>
            {`
              ul.ais-InfiniteHits-list {
                padding: 0px;
                list-style: none;
              }
            `}
          </style>
        </div>
      ) : (
        <ShopLoader />
      )}
    </>
  );
}

const InfiniteProductHits = connectInfiniteHits(InfiniteHits);

export default InfiniteProductHits;
