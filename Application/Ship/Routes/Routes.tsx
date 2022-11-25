import { RouteObject, useRoutes } from "react-router-dom";

import { Home } from "@/Application/Containers/Pages/Public/Home/Home";

import { Users } from "@/Application/Containers/Pages/Public/Users/Users";
import { Posts } from "@/Application/Containers/Pages/Public/Posts/Posts";
import { Todos } from "@/Application/Containers/Pages/Public/Todos/Todos";

import { Error } from "@/Application/Containers/Pages/Public/Error/Error";

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
