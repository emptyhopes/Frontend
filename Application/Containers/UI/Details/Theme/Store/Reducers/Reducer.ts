import { createSlice } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/UI/Details/Theme/Store/States/State";

import { SetThemePayloadInterface } from "@/Application/Containers/UI/Details/Theme/Store/Types/PayloadInterface";

const { reducer, actions } = createSlice({
  name: "Theme",
  initialState: State,
  reducers: {
    SetTheme(state, props: SetThemePayloadInterface): void {
      state.theme = props.payload;
    },
  },
});

const ThemeReducer = reducer;
const ThemeActions = actions;

export { ThemeReducer, ThemeActions };
