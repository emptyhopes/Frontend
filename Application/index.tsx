import * as React from "react";
import * as ReactDOM from "react-dom";

import { Application } from "@/Application/Containers/Application/Application";

const Structures = <Application />;

const root = document.getElementById("root");

ReactDOM.hydrate(Structures, root);
