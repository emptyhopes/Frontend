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

const CheckRouteActive = (url: string, path: string, children: JSX.Element) => {
  if (url === path) {
    return <StyledLi className="active">{children}</StyledLi>;
  }

  return <StyledLi>{children}</StyledLi>;
};

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <StyledNavbar>
        <nav>
          <StyledUl>
            {CheckRouteActive(location.pathname, "/", <StyledLink to={"/"}>Home</StyledLink>)}
            {CheckRouteActive(location.pathname, "/users", <StyledLink to={"/users"}>Users</StyledLink>)}
            {CheckRouteActive(location.pathname, "/posts", <StyledLink to={"/posts"}>Posts</StyledLink>)}
            {CheckRouteActive(location.pathname, "/todos", <StyledLink to={"/todos"}>Todos</StyledLink>)}
          </StyledUl>
        </nav>
      </StyledNavbar>
    </>
  );
};

export { Navbar };
