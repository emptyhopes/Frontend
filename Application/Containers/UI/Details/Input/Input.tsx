import * as React from "react";

import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Details/Input/Types/PropsInterface";

const StyledInput = styled.input`
  width: 500px;
  padding: 14px;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: #000000;
  outline: none;

  &:focus {
    border: 1px solid #00bfff;
  }
`;

const DefaultInput = (props: PropsInterface, ref) => {
  return (
    <>
      <StyledInput ref={ref} {...props} />
    </>
  );
};

const Input = React.forwardRef(DefaultInput);

export { Input };
