import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Application/Wrapper/Types/PropsInterface";

import { Header } from "@/Application/Containers/UI/Application/Header/Header";
import { Footer } from "@/Application/Containers/UI/Application/Footer/Footer";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const StyledMain = styled.main`
  flex: 1 0 auto;
`;

const Wrapper: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return (
    <>
      <Header />
      <StyledMain>
        <Container>{props.children}</Container>
      </StyledMain>
      <Footer />
    </>
  );
};

export { Wrapper };
