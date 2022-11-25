import styled from "styled-components";

import { FunctionComponent } from "react";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 100px 0;
`;

const Home: FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <h1 style={{ display: "flex", justifyContent: "center" }}>Home</h1>
          <StyledContent>
            <Button>Кнопка</Button>
            <Input />
            <Switch />
          </StyledContent>
          <StyledContent>
            <Button>Кнопка</Button>
            <Input />
            <Switch />
          </StyledContent>
        </Container>
      </Wrapper>
    </>
  );
};

export { Home };
