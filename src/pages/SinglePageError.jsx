import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <h2>Error: Page Not Found</h2>
      <Link to="/" className="btn">
        BACK HOME
      </Link>
    </Wrapper>
  );
};
export default SinglePageError;

const Wrapper = styled.div`
  margin-top: 5rem;
  color: var(--primary);
  text-align: center;
  font-size: 2rem;
`;
