import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Application/Container/Types/PropsInterface";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  padding: 0 10px;
  margin: 0 auto;
`;

const Container: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return <StyledContainer {...props} />;
};

export { Container };
