import { FunctionComponent } from "react";

import { Wrapper } from "@/Application/Containers/UI/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Container/Container";

const Todos: FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Todos</h1>
        </Container>
      </Wrapper>
    </>
  );
};

export { Todos };
