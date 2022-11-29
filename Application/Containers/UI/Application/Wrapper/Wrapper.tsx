import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Application/Wrapper/Types/PropsInterface";

const StyledWrapper = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.header.background.color};
`;

const Wrapper: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return (
    <>
      <StyledWrapper {...props} />
    </>
  );
};

export { Wrapper };
