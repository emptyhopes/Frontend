import styled from "styled-components";

import { useEffect } from "react";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";
import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";

import { FetchUsers } from "@/Application/Containers/Main/Store/ActionCreators";
import { MainActions } from "@/Application/Containers/Main/Store/Main";

const StyledTitle = styled.h1`
  h1 {
    color: black;
  }
`;

const Main = () => {
  const { isLoading, error, users, counts } = UseApplicationSelector((state) => state.MainReducers);
  const { increment, decrement } = MainActions;
  const dispatch = UseApplicationDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return (
    <>
      <StyledTitle>Main</StyledTitle>
      <p>{counts}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users)}
    </>
  );
};

export { Main };
