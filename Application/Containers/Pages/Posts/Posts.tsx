import { FunctionComponent } from "react";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const Posts: FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Posts</h1>
        </Container>
      </Wrapper>
    </>
  );
};

export { Posts };
