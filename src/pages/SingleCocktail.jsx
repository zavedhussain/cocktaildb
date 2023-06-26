import { useLoaderData, useParams } from "react-router-dom";

export const loader = async () => {
  const id = "11417";
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11417";
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks[0];
  } catch (error) {
    console.log(error.message);
  }
};

const SingleCocktail = () => {
  const cocktail = useLoaderData();
  let user = useParams();
  console.log(cocktail, user);
  return <div>SingleCocktail</div>;
};
export default SingleCocktail;
