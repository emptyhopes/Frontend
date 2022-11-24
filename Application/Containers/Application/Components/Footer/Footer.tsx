import styled from "styled-components";

import { Container } from "@/Application/Containers/Application/Components/Container/Container";

const StyledFooter = styled.footer`
  height: 120px;
  background-color: #fffadd;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container></Container>
      </StyledFooter>
    </>
  );
};

export { Footer };
