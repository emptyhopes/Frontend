import styled from "styled-components";

import { ButtonInterface } from "@/Application/Containers/UI/Details/Button/Types/ButtonInterface";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e0e3e7;
  border-radius: 10px;
  background: ${(props) => props.theme.button.background.color};
  color: #3e5060;

  &:hover {
    background: #f0f0f0;
  }
`;

const Button: React.FunctionComponent<ButtonInterface> = (props) => {
  return <StyledButton {...props} />;
};

export { Button };
