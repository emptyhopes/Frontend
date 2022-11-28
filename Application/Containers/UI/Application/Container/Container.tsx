import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Application/Container/Types/PropsInterface";

const StyledContainer = styled.div`
  display: ${(props: PropsInterface) => (props.flex ? "flex" : "block")};
  width: 100%;
  max-width: 1240px;
  height: 100%;
  flex-direction: ${(props: PropsInterface) => (props.column ? "column" : "unset")};
  align-items: ${(props: PropsInterface) => (props.HorizontalCenter ? "center" : "unset")};
  justify-content: ${(props: PropsInterface) => (props.VerticalCenter ? "center" : "unset")};
  padding: 0 10px;
  margin: 0 auto;
`;

const Container: React.FunctionComponent<PropsInterface> = (props: PropsInterface) => {
  return <StyledContainer {...props} />;
};

export { Container };
