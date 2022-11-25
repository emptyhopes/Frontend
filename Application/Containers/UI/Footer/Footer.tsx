import styled from "styled-components";

import { FunctionComponent } from "react";

import { Container } from "@/Application/Containers/UI/Container/Container";

const StyledFooter = styled.footer`
  height: 120px;
  background-color: #fffadd;
`;

const Footer: FunctionComponent = () => {
  return (
    <>
      <StyledFooter>
        <Container></Container>
      </StyledFooter>
    </>
  );
};

export { Footer };
