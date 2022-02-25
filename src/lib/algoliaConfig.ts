import algoliasearch from "algoliasearch";
import algoliarecommend from "@algolia/recommend";

const searchClient = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
);


export const algoliaClientRecommend = algoliarecommend(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
);

//
export default searchClient;
