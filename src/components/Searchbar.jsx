import styled from "styled-components";

const Searchbar = () => {
  return (
    <Wrapper>
      <form>
        <span>Search Your Favorite Cocktail</span>
        <input type="text" />
      </form>
    </Wrapper>
  );
};
export default Searchbar;

const Wrapper = styled.section`
  padding: 5rem 0;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
    padding: 2rem;
    max-width: 700px;
    border-radius: 5px;
    background-color: var(--secondary);
    box-shadow: 2px 5px 3px rgb(0, 0, 0, 0.5);
  }
  span {
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 3px;
  }
  input {
    font-size: 1.3rem;
    letter-spacing: 3px;
    border: none;
    background-color: var(--input);
    border-radius: 2px;
    padding: 8px;
  }
`;
