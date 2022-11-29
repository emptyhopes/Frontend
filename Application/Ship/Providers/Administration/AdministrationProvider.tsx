import * as React from "react";

import { Navigate } from "react-router-dom";

import { PropsInterface } from "@/Application/Ship/Providers/Authentication/Types/PropsInterface";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

const AdministrationProvider: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  const { email } = UseApplicationSelector((state) => state.AuthenticationReducer);
  const role = email === "literallymyfault@gmail.com" ? "ADMIN" : "USER";

  if (role !== "ADMIN") return <Navigate to="/error" replace />;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { AdministrationProvider };
