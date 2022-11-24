import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { UsersInterface } from "@/Application/Containers/Middlewares/Users/Types/UsersInterface";

const UsersAPI = createApi({
  reducerPath: "UsersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),

  endpoints: (build) => ({
    GetUsers: build.query<UsersInterface[], number>({
      query: (limit: number) => ({
        url: "users",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export { UsersAPI };
