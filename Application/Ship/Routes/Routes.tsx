import { RouteObject, useRoutes } from "react-router-dom";

import { Home } from "@/Application/Containers/Home/Home";

import { Users } from "@/Application/Containers/Users/Users";
import { Posts } from "@/Application/Containers/Posts/Posts";
import { Todos } from "@/Application/Containers/Todos/Todos";

import { Error } from "@/Application/Containers/Error/Error";

const Routes = () => {
  const routes: Array<RouteObject> = [
    {
      path: "/",
      index: false,
      element: <Home />,
      children: [],
    },

    {
      path: "/users",
      index: false,
      element: <Users />,
      children: [],
    },
    {
      path: "/posts",
      index: false,
      element: <Posts />,
      children: [],
    },
    {
      path: "/todos",
      index: false,
      element: <Todos />,
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
