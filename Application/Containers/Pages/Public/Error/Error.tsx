import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const StyledLink = styled(Link)`
  color: blue;
`;

const Error: React.FunctionComponent = (): React.ReactElement => {
  const location = useLocation();

  return (
    <>
      <Wrapper>
        <Container flex column VerticalCenter HorizontalCenter>
          <h1>Error</h1>
          {location.state ? <p>{location.state.error.data.message}</p> : <p>Страница не найдена</p>}
          <StyledLink to={"/"}>Вернуться на главную страницу</StyledLink>
        </Container>
      </Wrapper>
    </>
  );
};

export { Error };
