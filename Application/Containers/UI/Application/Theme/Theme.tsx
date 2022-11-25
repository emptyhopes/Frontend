import styled from "styled-components";

import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useState } from "react";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { ThemeActions } from "@/Application/Containers/UI/Application/Theme/Store/Reducers/Reducer";

import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";
import { ThemeInterface } from "@/Application/Containers/UI/Application/Theme/Types/ThemeInterface";

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 20px;
    height: 20px;
    margin: 0 15px 0 0;
  }
`;

const Theme: React.FunctionComponent<ThemeInterface> = (props) => {
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
