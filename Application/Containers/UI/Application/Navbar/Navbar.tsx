import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import { Theme } from "@/Application/Containers/UI/Details/Theme/Theme";
import { Language } from "@/Application/Containers/UI/Details/Language/Language";

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
    font-weight: 700;
  }

  & a:hover {
    color: #;
  }

  &.active {
    & a {
      background-color: #c0c0c0;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #ffffff;
`;

const StyledTheme = styled(Theme)`
  margin: 0 0 0 30px;
`;

const Navbar: React.FunctionComponent = (): React.ReactElement => {
  const location = useLocation();

  const GetElementLink = (url: string, children: React.ReactNode) => {
    if (location.pathname === url) {
      return <StyledLi className={"active"}>{children}</StyledLi>;
    }

    return <StyledLi>{children}</StyledLi>;
  };

  return (
    <>
      <StyledNavbar>
        <nav>
          <StyledUl>
            {GetElementLink("/", <StyledLink to={"/"}>Home</StyledLink>)}
            {GetElementLink("/users", <StyledLink to={"/users"}>Users</StyledLink>)}
            {GetElementLink("/posts", <StyledLink to={"/posts"}>Posts</StyledLink>)}
            {GetElementLink("/todos", <StyledLink to={"/todos"}>Todos</StyledLink>)}
          </StyledUl>
        </nav>
        <StyledTheme />
        <Language />
      </StyledNavbar>
    </>
  );
};

export { Navbar };
