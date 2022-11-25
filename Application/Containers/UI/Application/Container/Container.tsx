import styled from "styled-components";

import { FunctionComponent } from "react";

import { ContainerInterface } from "@/Application/Containers/UI/Application/Container/Types/ContainerInterface";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

const Container: FunctionComponent<ContainerInterface> = (props) => {
  return <StyledContainer {...props} />;
};

export { Container };
