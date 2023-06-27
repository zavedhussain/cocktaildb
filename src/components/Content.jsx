import Searchbar from "./Searchbar";
import Cocktails from "./Cocktails";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const loader = async ({ request }) => {
  const newUrl = new URL(request.url);
  const searchTerm = newUrl.searchParams.get("search") || "";
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  try {
    const response = await fetch(`${url}${searchTerm}`);
    const { drinks } = await response.json();
    return { drinks, searchTerm };
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const Content = () => {
  const { drinks, searchTerm } = useLoaderData();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
  });
  // console.log(data);
  return (
    <div>
      <Searchbar searchTerm={searchTerm} />
      <Cocktails cocktails={drinks} />
    </div>
  );
};
export default Content;
