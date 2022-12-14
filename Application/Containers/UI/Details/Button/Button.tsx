import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Details/Button/Types/PropsInterface";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e0e3e7;
  border-radius: 10px;
  background-color: var(--buttton-background-color);
  color: #3e5060;

  &:hover {
    background: #f0f0f0;
  }
`;

const Button: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return <StyledButton {...props} />;
};

export { Button };
