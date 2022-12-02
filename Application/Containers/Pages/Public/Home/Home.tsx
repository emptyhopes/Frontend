import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { Header } from "@/Application/Containers/UI/Application/Header/Header";
import { Footer } from "@/Application/Containers/UI/Application/Footer/Footer";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";
import { Modal } from "@/Application/Containers/UI/Details/Modal/Modal";
import { Loading } from "@/Application/Containers/UI/Details/Loading/Loading";

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 100px 0;
`;

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home: React.FunctionComponent = (): React.ReactElement => {
  const navigate = useNavigate();

  const [isActivated, SetActivated] = useState(false);

  const { isAuthentication } = UseApplicationSelector((state) => state.AuthenticationReducer);

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Breadcrumbs />
          <StyledTitle>Home</StyledTitle>
          <StyledContent>
            <Button>Кнопка</Button>
            <Input type="text" placeholder="Введите имя" />
            <Switch />
          </StyledContent>
          <StyledContent>
            {isAuthentication ? (
              <>
                <Button onClick={() => navigate("/logout")}>Выйти</Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/registration")}>Зарегистрироваться</Button>
                <Button onClick={() => navigate("/authentication")}>Войти</Button>
              </>
            )}
          </StyledContent>
          <StyledContent>
            <Button onClick={() => navigate("/admin")}>Admin</Button>
            <Button onClick={() => navigate("/analytics")}>Analytics</Button>
          </StyledContent>
          <StyledContent>
            <Button onClick={() => SetActivated(true)}>Modal</Button>
            <Modal isActivated={isActivated} SetActivated={SetActivated} />
            <Loading />
          </StyledContent>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export { Home };
