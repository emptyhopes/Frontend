import styled from "styled-components";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const StyledFooter = styled.footer`
  height: 120px;
  background-color: ${(props) => props.theme.header.background.color};
`;

const Footer: React.FunctionComponent = () => {
  return (
    <>
      <StyledFooter>
        <Container flex VerticalCenter HorizontalCenter>
          <h1>Footer</h1>
        </Container>
      </StyledFooter>
    </>
  );
};

export { Footer };
