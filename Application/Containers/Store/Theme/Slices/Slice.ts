import { createSlice } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/Store/Theme/States/State";

import { SetThemePayloadInterface } from "@/Application/Containers/Store/Theme/Types/PayloadInterface";

const Slice = createSlice({
  name: "Theme",
  initialState: State,
  reducers: {
    SetTheme(state, action: SetThemePayloadInterface): void {
      state.theme = action.payload;
    },
  },
});

const ThemeReducer = Slice.reducer;
const ThemeActions = Slice.actions;

export { ThemeReducer, ThemeActions };
