import styled from "styled-components";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { MainActions } from "@/Application/Containers/Main/Store/Main";

const StyledTitle = styled.h1`
  h1 {
    color: white;
  }
`;

const Main = () => {
  const { counts } = UseApplicationSelector((state) => state.MainReducers);
  const { increment, decrement } = MainActions;
  const dispatch = UseApplicationDispatch();
  return (
    <>
      <StyledTitle>Main</StyledTitle>
      <p>{counts}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export { Main };
