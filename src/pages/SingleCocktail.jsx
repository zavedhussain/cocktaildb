import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

//this function is used to setup query parameters for
// useQuery Hook and ensureQueryData method
const fetchSingleCocktail = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const response = await fetch(`${url}${id}`);
      const { drinks } = await response.json();
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
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(fetchSingleCocktail(id));
    return id;
  };

const SingleCocktail = () => {
  const id = useLoaderData();

  const { data: drinks } = useQuery(fetchSingleCocktail(id));

  if (drinks === null) {
    return (
      <Wrapper>
        <h2 className="section-title">no cocktail with this id</h2>
      </Wrapper>
    );
  }
  const cocktail = drinks[0];
  const {
    strDrink,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
    strDrinkThumb,
  } = cocktail;

  //get top 5 and remove empty ingredients
  let ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
  ];
  ingredients = ingredients.filter((ingredient) => ingredient).join(", ");
  return (
    <Wrapper>
      <Link to="/" className="btn">
        BACK HOME
      </Link>
      <h2>{strDrink}</h2>
      <div className="drink">
        <div className="img-container">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="drink-details">
          <p>
            <span>Name:</span>
            {strDrink}
          </p>
          <p>
            <span>Category:</span>
            {strCategory}
          </p>
          <p>
            <span>Info:</span>
            {strAlcoholic}
          </p>
          <p>
            <span>Glass:</span>
            {strGlass}
          </p>
          <p>
            <span>Instructions:</span>
            {strInstructions}
          </p>
          <p>
            <span>Ingredients:</span>
            {ingredients}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleCocktail;

const Wrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .btn {
    align-self: center;
  }

  h2 {
    align-self: center;
    font-size: 1.6rem;
  }
  .drink {
    display: flex;
    margin: 0 auto;
    gap: 2rem;
  }
  img {
    height: 30rem;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .drink-details {
    align-self: center;
    max-width: 600px;
  }
  p {
    font-weight: 700;
    line-height: 1.8;
    text-transform: capitalize;
    margin-bottom: 1.25rem;
  }
  span {
    padding: 5px 8px;
    margin-right: 5px;
    background-color: var(--primaryLight);
    color: var(--primary);
    border-radius: 5px;
  }
  .section-title {
    margin-top: 5rem;
    color: var(--primary);
    text-align: center;
    font-size: 2rem;
    text-transform: capitalize;
  }
`;
