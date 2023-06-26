import { Link } from "react-router-dom";
import styled from "styled-components";

const Cocktails = ({ cocktails }) => {
  console.log(cocktails);
  return (
    <Wrapper>
      <h1 className="header">Cocktails</h1>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          const { idDrink, strGlass, strAlcoholic, strDrink, strDrinkThumb } =
            cocktail;
          return (
            <article key={idDrink}>
              <div className="img-container">
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className="cocktail-footer">
                <h1>{strDrink}</h1>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <Link to={`/cocktail/${idDrink}`} className="btn">
                  DETAILS
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Cocktails;

const Wrapper = styled.section`
  .header {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .cocktails-center {
    display: grid;
    justify-items: center;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(338.8px, 1fr));
  }
  article {
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    border-radius: 5px;
    box-shadow: 2px 5px 3px 0 rgba(0, 0, 0, 0.5);
  }
  img {
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  article .cocktail-footer {
    padding: 2rem;
  }
  .cocktail-footer h1 {
    margin-bottom: 1rem;
  }
  .cocktail-footer h4 {
    margin-bottom: 0.3rem;
  }
  .cocktail-footer p {
    margin-bottom: 0.5rem;
  }
`;
