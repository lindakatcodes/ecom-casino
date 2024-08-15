import { algoliasearch } from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch";

const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID;
const apiKey = import.meta.env.PUBLIC_ALGOLIA_API_KEY;

const searchClient = algoliasearch(appId, apiKey);

const Hit = ({ hit }) => {
  if (!hit) return;
  return (
    <article>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
    </article>
  );
};

export function Search() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="ecommerce"
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}
