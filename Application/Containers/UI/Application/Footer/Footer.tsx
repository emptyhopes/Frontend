import styled from "styled-components";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Content } from "@/Application/Containers/UI/Application/Content/Content";

const StyledFooter = styled.footer`
  height: 120px;
  flex: 0 0 auto;
  background-color: var(--footer-background-color);
`;

const Footer: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <StyledFooter>
        <Container>
          <Content flex VerticalCenter HorizontalCenter $width $height>
            <h1>Footer</h1>
          </Content>
        </Container>
      </StyledFooter>
    </>
  );
};

export { Footer };
