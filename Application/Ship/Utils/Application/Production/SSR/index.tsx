import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Application } from "@/Application/Containers/Application/Application";

const Structures = (
  <React.StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </React.StrictMode>
);

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(Structures);
