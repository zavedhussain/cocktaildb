import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLink to="/" className="nav-link">
          <img src={logo} alt="TheCocktailDB" />
        </NavLink>
        <ul className="links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--secondary);
  border-bottom: 2px solid var(--primary);
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.5);
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .links {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
  }
`;

export default Navbar;
