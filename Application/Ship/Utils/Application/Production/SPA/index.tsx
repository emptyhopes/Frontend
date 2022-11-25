import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/Application/Ship/Store/index";
import { Application } from "@/Application/Containers/Application/Application";

const Structures = (
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>
);

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(Structures);
