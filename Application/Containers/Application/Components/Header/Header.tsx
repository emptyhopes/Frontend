import styled from "styled-components";

import { Link } from "react-router-dom";

import { Container } from "@/Application/Containers/Application/Components/Container/Container";
import { Navbar } from "@/Application/Containers/Application/Components/Header/Components/Navbar/Navbar";

const StyledHeader = styled.header`
  background-color: #fffadd;
`;

const StyledContent = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 100px;
`;

const StyledLogo = styled.div`
  width: 200px;
  height: 100px;

  & img {
    width: 200px;
    height: 100px;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledContent>
            <StyledLogo>
              <Link to={"/"}>
                <img src="https://i.imgur.com/ZSHGk74.jpeg" alt="" />
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
