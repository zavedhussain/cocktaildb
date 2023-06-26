import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h1>About Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        quisquam laboriosam, minus cupiditate illum placeat. Officia, fugiat.
        Facilis quis, perspiciatis, vel voluptatibus ducimus unde, doloremque
        fugit ipsum sapiente necessitatibus nam.
      </p>
    </Wrapper>
  );
};
export default About;

const Wrapper = styled.section`
  max-width: 700px;
  margin: 5rem auto 0;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 32px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 2rem;
  }
`;
