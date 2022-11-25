import { createSlice } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/UI/Application/Theme/Store/States/State";

import { ThemeProps } from "@/Application/Containers/UI/Application/Theme/Store/Types/ThemeInterface";

const { reducer, actions } = createSlice({
  name: "Theme",
  initialState: State,
  reducers: {
    SetTheme(state, props: ThemeProps): void {
      state.theme = props.payload;
    },
  },
});

const ThemeReducer = reducer;
const ThemeActions = actions;

export { ThemeReducer, ThemeActions };
