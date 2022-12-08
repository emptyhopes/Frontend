import { Fonts } from "@/Application/Containers/Application/Components/Fonts";
import { GlobalStyles } from "@/Application/Containers/Application/Components/GlobalStyles";

import { AuthenticationProvider } from "@/Application/Containers/Providers/AuthenticationProvider/AuthenticationProvider";
import { ThemeProvider } from "@/Application/Containers/Providers/ThemeProvider/ThemeProvider";
import { LanguageProvider } from "@/Application/Containers/Providers/LanguageProvider/LanguageProvider";

import { Routes } from "@/Application/Ship/Routes/Routes";
import { CookieConsent } from "@/Application/Containers/UI/Details/CookieConsent/CookieConsent";

const Application: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Fonts />
      <GlobalStyles />

      <AuthenticationProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Routes />
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </AuthenticationProvider>
    </>
  );
};

export { Application };
