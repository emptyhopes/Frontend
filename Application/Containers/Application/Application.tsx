import { Fonts } from "@/Application/Containers/Application/Components/Fonts";
import { GlobalStyles } from "@/Application/Containers/Application/Components/GlobalStyles";

import { AuthenticationProvider } from "@/Application/Containers/Providers/AuthenticationProvider/AuthenticationProvider";
import { ThemeProvider } from "@/Application/Containers/Providers/ThemeProvider/ThemeProvider";

import { Routes } from "@/Application/Ship/Routes/Routes";

const Application: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <AuthenticationProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </AuthenticationProvider>
    </>
  );
};

export { Application };
