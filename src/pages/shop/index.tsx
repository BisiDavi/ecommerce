import { useRouter } from "next/router";
import { useRef, useState } from "react";

import Applayout from "@/layout/Applayout";
import ShopView from "@/components/View/ShopView";
import searchClient from "@/lib/algoliaConfig";
import useAlgoliaSearch from "@/hooks/useAlgoliaSearch";

const DEBOUNCE_TIME = 700;

export default function Shop() {
  const router = useRouter();
  const { searchStateToUrl, urlToSearchState, createURL } = useAlgoliaSearch();
  const { asPath } = router;
  const [searchState, setSearchState] = useState<any>(urlToSearchState(asPath));
  const debouncedSetStateRef: any = useRef(null);

  const onSearchStateChange = (updatedSearchState: string) => {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToUrl(updatedSearchState);

    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  };

  return (
    <Applayout title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers">
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
