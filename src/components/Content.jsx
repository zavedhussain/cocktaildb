import Searchbar from "./Searchbar";
import Cocktails from "./Cocktails";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//this function is used to setup query parameters for
// useQuery Hook and ensureQueryData method
const searchCocktails = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      console.log(drinks);
      return drinks;
    },
  };
};

//loader takes queryClient to return a query function
//that is called immediately in App loader,
//this query function gets search params
//and returns a promise to fetch data before rendering
//as well as sets up caching with ensureQueryData
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const newUrl = new URL(request.url);
    const searchTerm = newUrl.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktails(searchTerm));
    return searchTerm;
  };
const Content = () => {
  const searchTerm = useLoaderData();
  const { data: drinks } = useQuery(searchCocktails(searchTerm));
  console.log(drinks);
  return (
    <div>
      <Searchbar searchTerm={searchTerm} />
      <Cocktails cocktails={drinks} />
    </div>
  );
};
export default Content;
