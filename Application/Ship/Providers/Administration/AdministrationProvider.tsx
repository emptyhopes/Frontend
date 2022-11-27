import * as React from "react";

import { Navigate } from "react-router-dom";

import { PropsInterface } from "@/Application/Ship/Providers/Administration/Types/PropsInterface";

const AdministrationProvider: React.FunctionComponent<PropsInterface> = (props) => {
  const role = "ADMIN";

  if (role !== "ADMIN") return <Navigate to="/error" />;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { AdministrationProvider };
