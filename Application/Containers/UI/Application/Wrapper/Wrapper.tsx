import styled from "styled-components";

import { WrapperInterface } from "@/Application/Containers/UI/Application/Wrapper/Types/WrapperInterface";

const StyledWrapper = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.header.background.color};
`;

const Wrapper: React.FunctionComponent<WrapperInterface> = (props) => {
  return (
    <>
      <StyledWrapper {...props} />
    </>
  );
};

export { Wrapper };
