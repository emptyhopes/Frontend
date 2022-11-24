import "@/Application/Containers/Application/Styles/Application.scss";

import { Header } from "@/Application/Containers/Application/Components/Header/Header";
import { Routes } from "@/Application/Ship/Routes/Routes";
import { Footer } from "@/Application/Containers/Application/Components/Footer/Footer";

const Application = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export { Application };
