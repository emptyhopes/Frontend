import styled from "styled-components";

import { FunctionComponent } from "react";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const StyledFooter = styled.footer`
  height: 120px;
  background-color: ${(props) => props.theme.header.background.color};
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
