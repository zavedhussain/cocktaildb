import { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

const Searchbar = ({ searchTerm }) => {
  const [searchValue, setSearch] = useState(searchTerm);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          value={searchValue}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-search"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Searchbar;

const Wrapper = styled.section`
  padding: 5rem 0;
  .form {
    display: flex;
    margin: 0 auto;
    padding: 2rem;
    max-width: 700px;
    border-radius: 5px;
    background-color: var(--secondary);
    box-shadow: 2px 5px 3px rgb(0, 0, 0, 0.5);
  }
  input {
    flex: 1;
    font-size: 1.3rem;
    letter-spacing: 3px;
    border: none;
    background-color: var(--input);
    border-radius: 2px;
    padding: 8px;
  }
  .btn-search {
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
