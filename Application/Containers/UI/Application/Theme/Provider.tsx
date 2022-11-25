import { ThemeProvider } from "styled-components";

import { UseApplicationSelector } from "@/Application/Ship/Store/Hooks/UseApplicationSelector";

import { ProviderInterface } from "@/Application/Containers/UI/Application/Theme/Types/ProviderInterface";

import { Light } from "@/Application/Containers/UI/Application/Theme/Themes/Light";
import { Dark } from "@/Application/Containers/UI/Application/Theme/Themes/Dark";

const Provider: React.FunctionComponent<ProviderInterface> = (props) => {
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

export { Provider };
