import { RouteObject, useRoutes } from "react-router-dom";

import { Main } from "@/Application/Containers/Main/Main";
import { Error } from "@/Application/Containers/Error/Error";

const Routes = () => {
  const routes: Array<RouteObject> = [
    {
      path: "/",
      index: false,
      element: <Main />,
      children: [],
    },
    {
      path: "error",
      index: false,
      element: <Error />,
      children: [],
    },
    {
      path: "*",
      index: false,
      element: <Error />,
      children: [],
    },
  ];

  return useRoutes(routes);
};

export { Routes };
