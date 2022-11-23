import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { Application } from "@/Application/Containers/Application/Application";

const Structures = <Application />;

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(Structures);
