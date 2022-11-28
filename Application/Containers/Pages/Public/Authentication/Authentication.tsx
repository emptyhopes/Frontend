import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Button } from "@/Application/Containers/UI/Details/Button/Button";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { AuthenticationActions } from "@/Application/Containers/Store/Authentication/Slices/Slice";
import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

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

    response.catch((error) => {
      navigate("/error", { state: { error: error } });
    });
  };

  return (
    <>
      <Wrapper>
        <Container flex column VerticalCenter HorizontalCenter>
          <Link style={{ margin: "0 0 20px 0", color: "blue" }} to={"/"}>
            Вернуться на главную страницу
          </Link>
          <Input
            style={{ margin: "0 0 20px 0" }}
            onChange={(event) => SetEmail(event.target.value)}
            placeholder="Введите электронный адрес"
          />
          <Input
            style={{ margin: "0 0 20px 0" }}
            onChange={(event) => SetPassword(event.target.value)}
            placeholder="Введите пароль"
          />
          <Button onClick={() => AuthenticateFunction()}>Войти</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export { Authentication };
