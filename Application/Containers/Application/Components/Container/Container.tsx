import styled from "styled-components";

import { ContainerInterface } from "@/Application/Containers/Application/Components/Container/Types/ContainerInterface";

const StyledContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const Container = (props: ContainerInterface) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export { Container };
