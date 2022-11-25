import styled from "styled-components";

import { InputInterface } from "@/Application/Containers/UI/Details/Input/Types/InputInterface";

const StyledInput = styled.input`
  padding: 14px;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: #000000;
  outline: none;

  &:focus {
    border: 1px solid #00bfff;
  }
`;

const Input: React.FunctionComponent<InputInterface> = (props) => {
  return <StyledInput {...props} />;
};

export { Input };
