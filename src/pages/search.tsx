/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useVirtual } from "react-virtual";
import Applayout from "@/layout/Applayout";
import Metatag from "@/components/Metatag";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/hooks/useRedux";
import { updateViewSearch } from "@/redux/algolia-slice";
import Product from "@/components/Products";

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const { viewSearch, searchData } = useAppSelector((state) => state.algolia);
  const parentRef: any = useRef();
  const router = useRouter();
  const { query } = router;

  const rowVirtualizer = useVirtual({
    size: searchData.length,
    parentRef,
    estimateSize: useCallback(() => 100, []),
    overscan: 12,
  });

  useEffect(() => {
    if (viewSearch) {
      dispatch(updateViewSearch());
    }
  }, [viewSearch]);

  return (
    <Applayout title="Search Store | Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <div ref={parentRef} className="container">
        <h5 className="text-center my-5">
          <span className="font-bold text-danger">
            ({searchData.length}) products
          </span>{" "}
          found from{" "}
          <span className="font-bold text-danger">{query.query}</span> search{" "}
        </h5>
        <div className="row pt-4 mx-n2">
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <Product
              key={virtualRow.index}
              product={searchData[virtualRow.index]}
              algoliaEvent="search"
            />
          ))}
        </div>
      </div>
    </Applayout>
  );
}
