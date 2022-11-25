import { FunctionComponent } from "react";

import { Wrapper } from "@/Application/Containers/UI/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Container/Container";

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
