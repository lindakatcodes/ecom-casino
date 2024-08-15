// import React from "react";
import algoliasearch, {
  type InitClientOptions,
  SearchClient,
} from "algoliasearch";
import { InstantSearch, SearchBox } from "react-instantsearch";

const algolia = algoliasearch as unknown as (
  appId: string,
  apiKey: string,
  options?: InitClientOptions
) => SearchClient;

const searchClient = algolia(
  import.meta.env.REACT_APP_ALGOLIA_APP_ID,
  import.meta.env.REACT_APP_ALGOLIA_API_KEY
);

export function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <SearchBox />
    </InstantSearch>
  );
}
