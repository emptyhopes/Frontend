import * as React from "react";

import { Navigate } from "react-router-dom";

import { PropsInterface } from "@/Application/Ship/Providers/Authentication/Types/PropsInterface";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

const AuthenticationProvider: React.FunctionComponent<PropsInterface> = (props: PropsInterface) => {
  const { isAuthentication } = UseApplicationSelector((state) => state.AuthenticationReducer);

  if (!isAuthentication) return <Navigate to="/error" replace />;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { AuthenticationProvider };
