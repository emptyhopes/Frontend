import styled from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Details/Switch/Types/PropsInterface";

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + span {
    background-color: #2196f3;
  }

  &:checked + span::before {
    transform: translateX(18px);
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 34px;
  background-color: #cccccc;
  cursor: pointer;
  transition: 0.2s;

  &::before {
    position: absolute;
    bottom: 3px;
    left: 4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;
    content: "";
    transition: 0.2s;
  }
`;

const Switch: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return (
    <StyledSwitch>
      <StyledInput type="checkbox" {...props} />
      <StyledSpan />
    </StyledSwitch>
  );
};

export { Switch };
