import * as React from "react";

import { Navigate } from "react-router-dom";

import { AuthenticationProviderInterface } from "@/Application/Ship/Providers/Authentication/Types/AuthenticationProviderInterface";

const AuthenticationProvider: React.FunctionComponent<AuthenticationProviderInterface> = (props) => {
  const authenticate = false;

  if (!authenticate) return <Navigate to="/error" />;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { AuthenticationProvider };
