import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";
import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Notification } from "@/Application/Containers/UI/Details/Notification/Notification";

import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

const Registration: React.FunctionComponent = (): React.ReactElement => {
  const navigate = useNavigate();
  const [RegistrationMiddleware] = AuthenticationMiddleware.useRegistrationMutation();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [error, SetError] = useState("");
  const [isFetching, SetFetching] = useState(false);
  const [isActivated, SetActivated] = useState(false);

  const RegistrationFunction = async () => {
    SetFetching(true);

    const response = RegistrationMiddleware({ email: email, password: password }).unwrap();

    response.then(() => {
      navigate("/");
    });

    response.catch((error) => {
      if (error.error) SetError(error.error);
      if (error.data.message) SetError(error.data.message);

      SetActivated(true);
    });

    SetFetching(false);
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
            placeholder="Введите электронный адрес"
          />
          <Input
            style={{ margin: "0 0 20px 0" }}
            onChange={(event) => SetPassword(event.target.value)}
            placeholder="Введите пароль"
          />
          <Button disabled={isActivated === true ? true : isFetching} onClick={() => RegistrationFunction()}>
            Зарегистрироваться
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export { Registration };
