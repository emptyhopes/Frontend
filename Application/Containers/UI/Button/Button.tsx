import styled from "styled-components";

import { FunctionComponent } from "react";

import { ButtonInterface } from "@/Application/Containers/UI/Button/Types/ButtonInterface";

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background: grey;
  color: ${({ primary }) => (primary ? "white" : "red")};

  &:hover {
    background: red;
  }
`;

const Button: FunctionComponent<ButtonInterface> = (props) => {
  return <StyledButton {...props} />;
};

export { Button };
