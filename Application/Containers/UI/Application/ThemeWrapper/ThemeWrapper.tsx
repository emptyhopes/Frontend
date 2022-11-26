import { ThemeProvider } from "styled-components";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { PropsInterface } from "@/Application/Containers/UI/Application/ThemeWrapper/Types/PropsInterface";

import { Light } from "@/Application/Ship/Themes/Light";
import { Dark } from "@/Application/Ship/Themes/Dark";

const ThemeWrapper: React.FunctionComponent<PropsInterface> = (props) => {
  const theme = UseApplicationSelector((state) => state.ThemeReducer.theme);

  const GetTheme = () => {
    if (theme === "Light") return Light;
    if (theme === "Dark") return Dark;
  };

  return (
    <>
      <ThemeProvider theme={GetTheme()} {...props}></ThemeProvider>
    </>
  );
};

export { ThemeWrapper };
