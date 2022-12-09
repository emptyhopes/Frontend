import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const UsersMiddleware = createApi({
  reducerPath: "UsersMiddleware",

  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com", mode: "cors" }),

  endpoints: (build) => ({
    GetUsers: build.query({
      query: (limit: number) => {
        return {
          url: "users",
          params: {
            _limit: limit,
          },
        };
      },
    }),
  }),
});

export { UsersMiddleware };
