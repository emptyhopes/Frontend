import styled from "styled-components";

import { IoCloseCircleOutline } from "react-icons/io5";

import { PropsInterface } from "@/Application/Containers/UI/Details/Modal/Types/PropsInterface";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

const StyledContent = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  border: 1px solid #000000;
  border-radius: 20px;
  background-color: #ffffff;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 12px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const Modal: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return (
    <>
      <StyledModal className={props.isActivated && "active"} onClick={() => props.SetActivated(false)}>
        <StyledContent onClick={(event) => event.stopPropagation()}>
          <StyledButton onClick={() => props.SetActivated(false)}>
            <IoCloseCircleOutline />
          </StyledButton>
        </StyledContent>
      </StyledModal>
    </>
  );
};

export { Modal };
