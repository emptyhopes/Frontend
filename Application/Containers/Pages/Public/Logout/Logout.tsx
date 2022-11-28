import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";

import { AuthenticationActions } from "@/Application/Containers/Store/Authentication/Slices/Slice";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";
import { Container } from "@/Application/Containers/UI/Application/Container/Container";

const Logout: React.FunctionComponent = () => {
  const dispatch = UseApplicationDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AuthenticationActions.RemoveUser());
    navigate("/");
  });

  return (
    <>
      <Wrapper>
        <Container></Container>
      </Wrapper>
    </>
  );
};

export { Logout };
