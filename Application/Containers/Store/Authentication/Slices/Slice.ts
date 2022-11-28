import { createSlice } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/Store/Authentication/States/State";

import { SetUserPayloadInterface } from "@/Application/Containers/Store/Authentication/Types/PayloadInterface";

const Slice = createSlice({
  name: "Authentication",
  initialState: State,
  reducers: {
    SetUser: (state, action: SetUserPayloadInterface): void => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.accessToken);
      state.isAuthentication = true;
    },

    RemoveUser: (state): void => {
      state.uid = "";
      state.email = "";
      localStorage.removeItem("token");
      state.isAuthentication = false;
    },
  },
});

const AuthenticationReducer = Slice.reducer;
const AuthenticationActions = Slice.actions;

export { AuthenticationReducer, AuthenticationActions };
