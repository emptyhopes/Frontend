import styled from "styled-components";

import { FunctionComponent } from "react";

import { WrapperInterface } from "@/Application/Containers/UI/Wrapper/Types/WrapperInterface";

const StyledWrapper = styled.main`
  flex-grow: 1;
`;

const Wrapper: FunctionComponent<WrapperInterface> = (props) => {
  return (
    <>
      <StyledWrapper {...props} />
    </>
  );
};

export { Wrapper };
