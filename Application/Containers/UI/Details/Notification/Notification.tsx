import styled, { keyframes } from "styled-components";

import { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

import { PropsInterface } from "@/Application/Containers/UI/Details/Notification/Types/PropsInterface";

const AnimationNotification = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const AnimationTimer = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
`;

const StyledNotification = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
  opacity: 0;
  transition: 0.5s;

  &.active {
    animation: ${AnimationNotification} 4s linear 1;
    animation-fill-mode: forwards;
    opacity: 1;
  }
`;

const StyledContent = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 10px;
  opacity: 0;
  transition: 0.5s;

  &.active {
    background-color: rgba(255, 0, 0, 0.1);
    opacity: 1;
  }
`;

const StyledTimer = styled.div`
  position: absolute;
  top: 0;
  left: 1px;
  width: 396px;
  height: 6px;
  border-radius: 10px 10px 0 0;

  &.active {
    border-radius: 10px 0 0;
    animation: ${AnimationTimer} 4s linear 1;
    animation-fill-mode: forwards;
    background-color: #ff0000;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 12px;
  right: 8px;
  border: none;
  background: transparent;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledText = styled.p`
  position: absolute;
  top: 2px;
  left: 15px;
  color: #ff0000;
  font-size: 14px;
`;

const Notification: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      props.SetActivated(false);
    }, 4000).unref;
  });

  const status = props.isActivated ? "active" : "";

  return (
    <>
      <StyledNotification className={status}>
        <StyledContent className={status}>
          <StyledTimer className={status} />
          <StyledButton onClick={() => props.SetActivated(false)}>
            <IoCloseCircleOutline />
          </StyledButton>
          <StyledText>{props.children}</StyledText>
        </StyledContent>
      </StyledNotification>
    </>
  );
};

export { Notification };
