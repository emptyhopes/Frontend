import styled from "styled-components";

import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { FunctionComponent, useState } from "react";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { ThemeActions } from "@/Application/Containers/UI/Application/Theme/Store/Reducers/Reducer";

import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";
import { ThemeInterface } from "@/Application/Containers/UI/Application/Theme/Types/ThemeInterface";

const StyledContent = styled.div``;

const Theme: FunctionComponent<ThemeInterface> = (props) => {
  const dispatch = UseApplicationDispatch();

  const { theme } = UseApplicationSelector((state) => state.ThemeReducer);
  const { SetTheme } = ThemeActions;

  const [isChecked, SetChecked] = useState(false);

  const Change = () => {
    if (theme === "Light") {
      dispatch(SetTheme("Dark"));
      SetChecked(true);
    }

    if (theme === "Dark") {
      dispatch(SetTheme("Light"));
      SetChecked(false);
    }
  };

  return (
    <StyledContent {...props}>
      {theme === "Light" ? <IoMoonOutline /> : <IoMoon />}
      <Switch checked={isChecked} onChange={Change} />
    </StyledContent>
  );
};

export { Theme };
