import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import Logo from "@/Application/Ship/Assets/Images/logo.png";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const StyledHeader = styled.header`
  flex: 0 0 auto;
  background-color: var(--header-background-color);
`;

const StyledContent = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

const StyledLogo = styled.div`
  & img {
    width: 200px;
    height: 105px;
  }
`;

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

const Header: React.FunctionComponent = (): React.ReactElement => {
  const location = useLocation();

  const GetElementLink = (url: string, children: React.ReactNode) => {
    if (location.pathname === url) {
      return <StyledLi className={"active"}>{children}</StyledLi>;
    }

    return <StyledLi>{children}</StyledLi>;
  };

  return (
    <>
      <StyledHeader>
        <Container>
          <StyledContent>
            <StyledLogo>
              <Link aria-label="redirect to home page" to={"/"}>
                <img src={Logo} alt="" />
              </Link>
            </StyledLogo>
            <StyledNavbar>
              <nav>
                <StyledUl>
                  {GetElementLink("/", <StyledLink to={"/"}>Home</StyledLink>)}
                  {GetElementLink("/users", <StyledLink to={"/users"}>Users</StyledLink>)}
                  {GetElementLink("/posts", <StyledLink to={"/posts"}>Posts</StyledLink>)}
                  {GetElementLink("/todos", <StyledLink to={"/todos"}>Todos</StyledLink>)}
                </StyledUl>
              </nav>
            </StyledNavbar>
          </StyledContent>
        </Container>
      </StyledHeader>
    </>
  );
};

export { Header };
