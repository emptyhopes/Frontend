import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Notification } from "@/Application/Containers/UI/Details/Notification/Notification";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { AuthenticationActions } from "@/Application/Containers/Store/Authentication/Slices/Slice";
import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

const Authentication: React.FunctionComponent = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = UseApplicationDispatch();
  const [AuthenticateMiddleware, { isLoading }] = AuthenticationMiddleware.useAuthenticateMutation();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [error, SetError] = useState("");
  const [isActivated, SetActivated] = useState(false);

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
      if (error?.error) SetError(error?.error);
      if (error?.data?.message) SetError(error?.data?.message);

      SetActivated(true);
    });
  };

  return (
    <>
      <Wrapper>
        <Container flex column VerticalCenter HorizontalCenter>
          {isActivated && (
            <Notification isActivated={isActivated} SetActivated={SetActivated}>
              {error}
            </Notification>
          )}

          <Link style={{ margin: "0 0 20px 0", color: "blue" }} to={"/"}>
            Вернуться на главную страницу
          </Link>

          <Input
            style={{ margin: "0 0 20px 0" }}
            onChange={(event) => SetEmail(event.target.value)}
            type="text"
            placeholder="Введите электронный адрес"
          />
          <Input
            style={{ margin: "0 0 20px 0" }}
            onChange={(event) => SetPassword(event.target.value)}
            type="password"
            placeholder="Введите пароль"
          />
          <Button disabled={isActivated === true ? isActivated : isLoading} onClick={() => AuthenticateFunction()}>
            Войти
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export { Authentication };
