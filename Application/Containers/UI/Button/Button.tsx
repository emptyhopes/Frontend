import styled from "styled-components";

import { FunctionComponent } from "react";

import { ButtonInterface } from "@/Application/Containers/UI/Button/Types/ButtonInterface";

const StyledButton = styled.button`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  padding: 10px 20px;
  border: 1px solid #e0e3e7;
  border-radius: 10px;
  background: #ffffff;
  color: #3e5060;

  &:hover {
    background: #e2edf8;
  }
`;

const Button: FunctionComponent<ButtonInterface> = (props) => {
  return <StyledButton {...props} />;
};

export { Button };
