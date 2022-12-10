import { Variables } from "@/Application/Containers/Application/Components/Variables";
import { Fonts } from "@/Application/Containers/Application/Components/Fonts";
import { Global } from "@/Application/Containers/Application/Components/Global";

import { AuthenticationProvider } from "@/Application/Containers/Providers/AuthenticationProviders/AuthenticationProvider";
import { LanguageProvider } from "@/Application/Containers/Providers/LanguageProviders/LanguageProvider";

import { Routes } from "@/Application/Ship/Routes/Routes";
import { CookieConsent } from "@/Application/Containers/UI/Details/CookieConsent/CookieConsent";

const Application: React.FunctionComponent = (): React.ReactElement => {
  return (
    <>
      <Variables />
      <Fonts />
      <Global />

      <AuthenticationProvider>
        <LanguageProvider>
          <Routes />
          <CookieConsent />
        </LanguageProvider>
      </AuthenticationProvider>
    </>
  );
};

export { Application };
