import styled from "styled-components";

import { Link } from "react-router-dom";

import Logo from "@/Application/Ship/Assets/Images/logo.png";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Navbar } from "@/Application/Containers/UI/Application/Navbar/Navbar";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.header.background.color};
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

const Header: React.FunctionComponent = (): React.ReactElement => {
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
            <Navbar />
          </StyledContent>
        </Container>
      </StyledHeader>
    </>
  );
};

export { Header };
