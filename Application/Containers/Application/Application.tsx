import "@/Application/Containers/Application/Styles/Application.scss";
import "@/Application/Containers/Application/Styles/Fonts.scss";
import "@/Application/Containers/Application/Styles/Variables.scss";

import { Provider } from "@/Application/Containers/UI/Application/Theme/Provider";

import { Header } from "@/Application/Containers/UI/Application/Header/Header";
import { Routes } from "@/Application/Ship/Routes/Routes";
import { Footer } from "@/Application/Containers/UI/Application/Footer/Footer";

const Application: React.FunctionComponent = () => {
  return (
    <>
      <Provider>
        <Header />
        <Routes />
        <Footer />
      </Provider>
    </>
  );
};

export { Application };
