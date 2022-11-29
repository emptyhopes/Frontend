import styled from "styled-components";

import { useState } from "react";
import { IoSunnyOutline, IoSunny } from "react-icons/io5";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { ThemeActions } from "@/Application/Containers/Store/Theme/Slices/Slice";

import { PropsInterface } from "@/Application/Containers/UI/Details/Theme/Types/PropsInterface";

import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 20px;
    height: 20px;
    margin: 0 15px;
  }
`;

const Theme: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
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
      <IoSunnyOutline />
      <Switch checked={isChecked} onChange={Change} />
      <IoSunny />
    </StyledContent>
  );
};

export { Theme };
