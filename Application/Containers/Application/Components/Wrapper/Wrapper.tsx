import styled from "styled-components";

import { WrapperInterface } from "@/Application/Containers/Application/Components/Wrapper/Types/WrapperInterface";

const StyledWrapper = styled.main`
  flex-grow: 1;
`;

const Wrapper = (props: WrapperInterface) => {
  return <StyledWrapper {...props}></StyledWrapper>;
};

export { Wrapper };
