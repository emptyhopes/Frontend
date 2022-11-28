import { RouteObject, useRoutes } from "react-router-dom";

import { AuthenticationProvider } from "@/Application/Ship/Providers/Authentication/AuthenticationProvider";
import { AdministrationProvider } from "@/Application/Ship/Providers/Administration/AdministrationProvider";

import { Home } from "@/Application/Containers/Pages/Public/Home/Home";

import { Registration } from "@/Application/Containers/Pages/Public/Registration/Registration";
import { Authentication } from "@/Application/Containers/Pages/Public/Authentication/Authentication";
import { Logout } from "@/Application/Containers/Pages/Public/Logout/Logout";

import { Users } from "@/Application/Containers/Pages/Authentication/Users/Users";
import { Posts } from "@/Application/Containers/Pages/Authentication/Posts/Posts";
import { Todos } from "@/Application/Containers/Pages/Authentication/Todos/Todos";

import { Admin } from "@/Application/Containers/Pages/Administration/Admin/Admin";
import { Analytics } from "@/Application/Containers/Pages/Administration/Analytics/Analytics";

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
      path: "/authentication",
      index: false,
      element: <Authentication />,
      children: [],
    },
    {
      path: "/registration",
      index: false,
      element: <Registration />,
      children: [],
    },
    {
      path: "/logout",
      index: false,
      element: <Logout />,
      children: [],
    },
    {
      path: "/users",
      index: false,
      element: (
        <AuthenticationProvider>
          <Users />
        </AuthenticationProvider>
      ),
      children: [],
    },
    {
      path: "/posts",
      index: false,
      element: (
        <AuthenticationProvider>
          <Posts />
        </AuthenticationProvider>
      ),
      children: [],
    },
    {
      path: "/todos",
      index: false,
      element: (
        <AuthenticationProvider>
          <Todos />
        </AuthenticationProvider>
      ),
      children: [],
    },
    {
      path: "/admin",
      index: false,
      element: (
        <AdministrationProvider>
          <Admin />
        </AdministrationProvider>
      ),
      children: [],
    },
    {
      path: "/analytics",
      index: false,
      element: (
        <AdministrationProvider>
          <Analytics />
        </AdministrationProvider>
      ),
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
