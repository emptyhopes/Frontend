import styled from "styled-components";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  padding: 0;

  & li + li {
    margin: 0 0 0 40px;
  }
`;

const StyledLi = styled.li`
  & a {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #ffffff;
  }

  & a:hover {
    color: red;
  }

  &.active {
    & a {
      background-color: #c6d8ff;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #ffffff;
`;

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <StyledNavbar>
        <nav>
          <StyledUl>
            <StyledLi className={location.pathname === "/" ? "active" : ""}>
              <StyledLink to={"/"}>Home</StyledLink>
            </StyledLi>
            <StyledLi className={location.pathname === "/users" ? "active" : ""}>
              <StyledLink to={"/users"}>Users</StyledLink>
            </StyledLi>
            <StyledLi className={location.pathname === "/posts" ? "active" : ""}>
              <StyledLink to={"/posts"}>Posts</StyledLink>
            </StyledLi>
            <StyledLi className={location.pathname === "/todos" ? "active" : ""}>
              <StyledLink to={"/todos"}>Todos</StyledLink>
            </StyledLi>
          </StyledUl>
        </nav>
      </StyledNavbar>
    </>
  );
};

export { Navbar };
