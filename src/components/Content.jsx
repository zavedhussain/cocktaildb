import Searchbar from "./Searchbar";
import Cocktails from "./Cocktails";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const searchTerm = "gin";
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const Content = () => {
  const cocktails = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Searchbar />
      <Cocktails cocktails={cocktails} />
    </div>
  );
};
export default Content;
