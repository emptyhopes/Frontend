import styled, { keyframes } from "styled-components";

import { PropsInterface } from "@/Application/Containers/UI/Details/Loading/Types/PropsInterface";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);

  & div {
    width: 75px;
    height: 75px;
    border: 5px solid transparent;
    border-color: #000000 transparent;
  }
`;

const StyledLoading = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid transparent;
  border-color: #000000 transparent;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

const Loading: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  return (
    <>
      {props.page ? (
        <StyledPage>
          <StyledLoading />
        </StyledPage>
      ) : (
        <StyledLoading />
      )}
    </>
  );
};

export { Loading };
