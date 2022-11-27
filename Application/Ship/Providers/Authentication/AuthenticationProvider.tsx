import * as React from "react";

import { Navigate } from "react-router-dom";

import { PropsInterface } from "@/Application/Ship/Providers/Authentication/Types/PropsInterface";

const AuthenticationProvider: React.FunctionComponent<PropsInterface> = (props) => {
  const authenticate = false;

  if (!authenticate) return <Navigate to="/login" />;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { AuthenticationProvider };
