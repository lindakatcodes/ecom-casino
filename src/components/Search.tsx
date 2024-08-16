import { algoliasearch } from "algoliasearch";
// import MagnifyingGlass from "astro-heroicons/outline/MagnifyingGlass.astro";

const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID;
const apiKey = import.meta.env.PUBLIC_ALGOLIA_API_KEY;
const indexKey = "ecommerce";

const client = algoliasearch(appId, apiKey);

export function Search() {
  
}
