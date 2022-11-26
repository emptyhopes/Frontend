import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { UserInterface } from "@/Application/Containers/Middlewares/Users/Types/UserInterface";

const UsersAPI = createApi({
  reducerPath: "UsersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),

  endpoints: (build) => ({
    GetUsers: build.query<UserInterface[], number>({
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
