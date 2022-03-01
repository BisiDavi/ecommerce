import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import { PropsWithChildren } from "react";

import searchClient from "@/lib/algoliaConfig";
import { useAppDispatch } from "@/redux/store";
import { updateQuery } from "@/redux/algolia-slice";

export default function AlgoliaInstantSearch({
  children,
}: PropsWithChildren<{}>) {
  const dispatch = useAppDispatch();

  const algoliasearchClient = {
    ...searchClient,
    search(requests: any) {
      if (requests.every(({ params }: any) => !params?.query?.length)) {
        dispatch(updateQuery(requests[0].params?.query));

        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
          })),
        });
      }
      return searchClient.search(requests);
    },
  };

  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={algoliasearchClient}
    >
      {children}
    </InstantSearch>
  );
}

export function AlgoliaView({ children }: PropsWithChildren<{}>) {
  const searchClient = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
  );

  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={searchClient}
    >
      {children}
    </InstantSearch>
  );
}
