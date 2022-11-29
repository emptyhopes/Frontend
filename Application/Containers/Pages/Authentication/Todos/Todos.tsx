import styled from "styled-components";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Todos: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Wrapper>
        <Container>
          <Breadcrumbs />
          <StyledTitle>Todos</StyledTitle>
        </Container>
      </Wrapper>
    </>
  );
};

export { Todos };
