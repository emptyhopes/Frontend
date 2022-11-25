import styled from "styled-components";

import { FunctionComponent } from "react";

import { InputInterface } from "@/Application/Containers/UI/Input/Types/InputInterface";

const StyledInput = styled.input``;

const Input: FunctionComponent<InputInterface> = (props) => {
  return <StyledInput {...props} />;
};

export { Input };
