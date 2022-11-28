import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Input } from "@/Application/Containers/UI/Details/Input/Input";

import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  & input + input {
    margin: 20px 0 0;
  }

  & input + button {
    margin: 20px 0 0;
  }
`;

const Registration: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [RegistrationMiddleware] = AuthenticationMiddleware.useRegistrationMutation();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const RegistrationFunction = async () => {
    const response = RegistrationMiddleware({ email: email, password: password }).unwrap();

    response.then(() => {
      navigate("/");
    });

    response.catch(() => {
      navigate("/error");
    });
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Breadcrumbs />
          <StyledContent>
            <Input onChange={(event) => SetEmail(event.target.value)} placeholder="Введите электронный адрес" />
            <Input onChange={(event) => SetPassword(event.target.value)} placeholder="Введите пароль" />
            <Button onClick={() => RegistrationFunction()}>Зарегистрироваться</Button>
          </StyledContent>
        </Container>
      </Wrapper>
    </>
  );
};

export { Registration };
