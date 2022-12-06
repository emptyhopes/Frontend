import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { Server } from "@/Config/Server";
import {
  RegistrationInterface,
  AuthenticationInterface,
} from "@/Application/Containers/Middlewares/Authentication/Types/AuthenticationMiddlewareInterface";

const AuthenticationMiddleware = createApi({
  reducerPath: "AuthenticationMiddleware",

  baseQuery: fetchBaseQuery({
    baseUrl: Server.url,
  }),

  endpoints: (build) => ({
    Registration: build.mutation({
      query: (body: RegistrationInterface) => {
        return {
          url: "registration",
          method: "POST",
          body: body,
        };
      },
    }),

    Authenticate: build.mutation({
      query: (body: AuthenticationInterface) => {
        return {
          url: "login",
          method: "POST",
          credentials: "include",
          body: body,
        };
      },
    }),

    Refresh: build.mutation({
      query: () => {
        return {
          url: "refresh",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export { AuthenticationMiddleware };
