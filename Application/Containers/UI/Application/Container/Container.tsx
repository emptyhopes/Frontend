import styled from "styled-components";

import { ContainerInterface } from "@/Application/Containers/UI/Application/Container/Types/ContainerInterface";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 10px;
  margin: 0 auto;
`;

const Container: React.FunctionComponent<ContainerInterface> = (props) => {
  return <StyledContainer {...props} />;
};

export { Container };
