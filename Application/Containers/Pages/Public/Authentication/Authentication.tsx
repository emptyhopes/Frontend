import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Notification } from "@/Application/Containers/UI/Details/Notification/Notification";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { AuthenticationActions } from "@/Application/Containers/Store/Authentication/Slices/Slice";
import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/AuthenticationMiddlewares/AuthenticationMiddleware";

const Authentication: React.FunctionComponent = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = UseApplicationDispatch();
  const [AuthenticateMiddleware, { isLoading }] = AuthenticationMiddleware.useAuthenticateMutation();

  const email = useRef(null);
  const password = useRef(null);

  const [error, SetError] = useState("");
  const [isActivated, SetActivated] = useState(false);

  const AuthenticateFunction = () => {
    const response = AuthenticateMiddleware({ email: email.current.value, password: password.current.value }).unwrap();

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
        <Container>
          {isActivated && (
            <Notification isActivated={isActivated} SetActivated={SetActivated}>
              {error}
            </Notification>
          )}

          <Link style={{ margin: "0 0 20px 0", color: "blue" }} to={"/"}>
            Вернуться на главную страницу
          </Link>

          <Input style={{ margin: "0 0 20px 0" }} ref={email} type="text" placeholder="Введите электронный адрес" />
          <Input style={{ margin: "0 0 20px 0" }} ref={password} type="password" placeholder="Введите пароль" />

          <Button disabled={isActivated === true ? isActivated : isLoading} onClick={() => AuthenticateFunction()}>
            Войти
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export { Authentication };
