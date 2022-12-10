import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import { Content } from "@/Application/Containers/UI/Application/Content/Content";

const StyledLink = styled(Link)`
  color: blue;
`;

const Error: React.FunctionComponent = (): React.ReactElement => {
  const location = useLocation();

  return (
    <>
      <Content flex column VerticalCenter HorizontalCenter $width $height>
        <h1>Error</h1>
        {location.state ? <p>{location.state.error.data.message}</p> : <p>Страница не найдена</p>}
        <StyledLink to={"/"}>Вернуться на главную страницу</StyledLink>
      </Content>
    </>
  );
};

export { Error };
