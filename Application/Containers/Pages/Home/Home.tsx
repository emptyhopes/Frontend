import { FunctionComponent } from "react";

import { Wrapper } from "@/Application/Containers/UI/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Container/Container";

import { Button } from "@/Application/Containers/UI/Button/Button";
import { Input } from "@/Application/Containers/UI/Input/Input";

const Home: FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <div style={{ margin: "0 200px" }}>
            <Button>Кнопка</Button>
            <Input />
          </div>

          <h1>Home</h1>
        </Container>
      </Wrapper>
    </>
  );
};

export { Home };
