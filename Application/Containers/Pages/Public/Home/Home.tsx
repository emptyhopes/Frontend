import styled from "styled-components";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 100px 0;
`;

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Breadcrumbs />
          <h1 style={{ display: "flex", justifyContent: "center" }}>Home</h1>
          <StyledContent>
            <Button>Кнопка</Button>
            <Input placeholder={"Введите имя"} />
            <Switch />
          </StyledContent>
          <StyledContent>
            <Button>Кнопка</Button>
            <Input placeholder={"Введите имя"} />
            <Switch />
          </StyledContent>
        </Container>
      </Wrapper>
    </>
  );
};

export { Home };
