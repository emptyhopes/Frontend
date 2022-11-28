import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";
import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Button } from "@/Application/Containers/UI/Details/Button/Button";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { AuthenticationActions } from "@/Application/Containers/Store/Authentication/Slices/Slice";
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

const Authentication: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = UseApplicationDispatch();
  const [AuthenticateMiddleware] = AuthenticationMiddleware.useAuthenticateMutation();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const AuthenticateFunction = () => {
    const response = AuthenticateMiddleware({ email: email, password: password }).unwrap();

    response.then((data) => {
      dispatch(
        AuthenticationActions.SetUser({
          uid: data.user.id,
          email: data.user.email,
          accessToken: data.accessToken,
        }),
      );

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
            <Button onClick={() => AuthenticateFunction()}>Войти</Button>
          </StyledContent>
        </Container>
      </Wrapper>
    </>
  );
};

export { Authentication };
