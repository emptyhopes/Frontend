import styled from "styled-components";

import { Link } from "react-router-dom";

import Logo from "@/Application/Ship/Assets/Images/Logo.png";

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
  width: 200px;
  height: 100px;

  & img {
    width: 200px;
    height: 100px;
  }
`;

const Header: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledContent>
            <StyledLogo>
              <Link to={"/"}>
                <img src={Logo} />
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
