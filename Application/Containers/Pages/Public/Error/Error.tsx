import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";

import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const Error: React.FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Breadcrumbs />
          <h1>Error</h1>
        </Container>
      </Wrapper>
    </>
  );
};

export { Error };
