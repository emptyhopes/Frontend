import "@/Application/Containers/Application/Styles/Application.scss";
import "@/Application/Containers/Application/Styles/Fonts.scss";

import { AuthenticationProvider } from "@/Application/Containers/Providers/AuthenticationProvider/AuthenticationProvider";
import { ThemeProvider } from "@/Application/Containers/Providers/ThemeProvider/ThemeProvider";

import { Routes } from "@/Application/Ship/Routes/Routes";

const Application: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <AuthenticationProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </AuthenticationProvider>
    </>
  );
};

export { Application };
