import { FunctionComponent } from "react";

import "@/Application/Containers/Application/Styles/Application.scss";
import "@/Application/Containers/Application/Styles/Fonts.scss";
import "@/Application/Containers/Application/Styles/Variables.scss";

import { Header } from "@/Application/Containers/UI/Header/Header";
import { Routes } from "@/Application/Ship/Routes/Routes";
import { Footer } from "@/Application/Containers/UI/Footer/Footer";

const Application: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export { Application };
