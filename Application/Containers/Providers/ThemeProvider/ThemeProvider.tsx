import { ThemeProvider as Provider } from "styled-components";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { PropsInterface } from "@/Application/Containers/Providers/ThemeProvider/Types/PropsInterface";

import { Light } from "@/Application/Ship/Themes/Light";
import { Dark } from "@/Application/Ship/Themes/Dark";

const ThemeProvider: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  const theme = UseApplicationSelector((state) => state.ThemeReducer.theme);

  const GetTheme = () => {
    if (theme === "Light") return Light;
    if (theme === "Dark") return Dark;
  };

  return (
    <>
      <Provider theme={GetTheme()} {...props}></Provider>
    </>
  );
};

export { ThemeProvider };
