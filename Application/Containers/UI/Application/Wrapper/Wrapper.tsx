import styled from "styled-components";

import { FunctionComponent } from "react";

import { WrapperInterface } from "@/Application/Containers/UI/Application/Wrapper/Types/WrapperInterface";

const StyledWrapper = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.header.background.color};
`;

const Wrapper: FunctionComponent<WrapperInterface> = (props) => {
  return (
    <>
      <StyledWrapper {...props} />
    </>
  );
};

export { Wrapper };
