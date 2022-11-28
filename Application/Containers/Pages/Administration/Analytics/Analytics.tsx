import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

const Analytics: React.FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Breadcrumbs />
          <h1>Analytics</h1>
        </Container>
      </Wrapper>
    </>
  );
};

export { Analytics };
