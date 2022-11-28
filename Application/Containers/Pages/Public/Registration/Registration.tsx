import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";
import { Input } from "@/Application/Containers/UI/Details/Input/Input";

import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

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
          <Button onClick={() => RegistrationFunction()}>Зарегистрироваться</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export { Registration };
