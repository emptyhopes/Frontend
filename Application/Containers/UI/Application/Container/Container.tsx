import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Application/Container/Types/PropsInterface";

const StyledContainer = styled.div`
  display: ${(props: PropsInterface) => props.flex && "flex"};
  width: 100%;
  max-width: 1240px;
  height: 100%;
  flex-direction: ${(props: PropsInterface) => props.column && "column"};
  align-items: ${(props: PropsInterface) => props.HorizontalCenter && "center"};
  justify-content: ${(props: PropsInterface) => props.VerticalCenter && "center"};
  padding: 0 10px;
  margin: 0 auto;
`;

const Container: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return <StyledContainer {...props} />;
};

export { Container };
