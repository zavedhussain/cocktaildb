import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  const { statusText, error, status } = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <h2>Error: {status}</h2>
      <p>{statusText}</p>
    </Wrapper>
  );
};
export default Error;

const Wrapper = styled.div`
  margin-top: 5rem;
  color: var(--primary);
  text-align: center;
  font-size: 2rem;
`;
