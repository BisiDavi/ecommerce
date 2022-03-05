import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import fetchAllSwellProducts from "@/lib/processPageproduct";
import Metatag from "@/components/Metatag";
import Applayout from "@/layout/Applayout";
import toTitleCase, {
  replaceHypenWithSpace,
  replaceSpaceWithHypen,
} from "@/lib/formatString";
import ShopView from "@/components/View/ShopView";
import searchClient from "@/lib/algoliaConfig";
import useAlgoliaSearch from "@/hooks/useAlgoliaSearch";
import { updateDefaultRefinement } from "@/redux/algolia-slice";
import { useAppDispatch } from "@/hooks/useRedux";

const DEBOUNCE_TIME = 700;

export default function Vendors({ vendor }) {
  console.log("vendor", vendor);
  const router = useRouter();
  const { slug } = router?.query;
  const { searchStateToUrl, urlToSearchState, createURL } = useAlgoliaSearch();
  const { asPath } = router;
  const [searchState, setSearchState] = useState(urlToSearchState(asPath));
  const debouncedSetStateRef = useRef(null);
  const dispatch = useAppDispatch();

  const onSearchStateChange = (updatedSearchState) => {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToUrl(updatedSearchState);

    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  };
  console.log("router", router);

  useEffect(() => {
    if (slug.includes(vendor.toLowerCase())) {
      dispatch(updateDefaultRefinement(vendor));
    } else {
      dispatch(updateDefaultRefinement(null));
    }
  }, []);

  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <ShopView
        searchClient={searchClient}
        indexName="New_Livehealthy_products_index"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      />
    </Applayout>
  );
}

export async function getStaticProps({ params }) {
  const formatVendor = replaceHypenWithSpace(params.slug);
  const vendor = toTitleCase(formatVendor);

  return {
    props: {
      vendor,
    },
  };
}

export async function getStaticPaths() {
  const productData = await fetchAllSwellProducts();
  const results = await Promise.all(productData);

  console.log("results", results);

  let vendorArray = [];
  results[0].map((result) => vendorArray.push(result.vendor));

  let vendors = [...new Set(vendorArray)];

  return {
    paths:
      vendors?.map(
        (vendor) => `/shop/vendors/${replaceSpaceWithHypen(vendor)}`
      ) || [],
    fallback: false,
  };
}
