import "@/Application/Containers/Application/Styles/Application.scss";
import "@/Application/Containers/Application/Styles/Fonts.scss";
import "@/Application/Containers/Application/Styles/Variables.scss";

import { AuthenticationProvider } from "@/Application/Containers/Providers/AuthenticationProvider/AuthenticationProvider";
import { ThemeProvider } from "@/Application/Containers/Providers/ThemeProvider/ThemeProvider";

import { Header } from "@/Application/Containers/UI/Application/Header/Header";
import { Routes } from "@/Application/Ship/Routes/Routes";
import { Footer } from "@/Application/Containers/UI/Application/Footer/Footer";

const Application: React.FunctionComponent = () => {
  return (
    <>
      <AuthenticationProvider>
        <ThemeProvider>
          <Header />
          <Routes />
          <Footer />
        </ThemeProvider>
      </AuthenticationProvider>
    </>
  );
};

export { Application };
