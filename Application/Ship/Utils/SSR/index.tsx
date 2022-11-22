import * as React from "react";
import * as ReactDOM from "react-dom";

import { Application } from "@/Application/Containers/Application/Application";

const Structures = <Application />;

const element = document.getElementById("root");

ReactDOM.hydrate(Structures, element);
