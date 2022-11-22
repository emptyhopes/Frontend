import * as React from "react";
import * as ReactDOM from "react-dom";

// import { BrowserRouter } from "react-router-dom";

import { Application } from "@/Application/Containers/Application/Application";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => navigator.serviceWorker.register("ServiceWorkers.js"));
// }

// const Structures = (
//   <React.StrictMode>
//     <BrowserRouter>
//       <Application />
//     </BrowserRouter>
//   </React.StrictMode>
// );

const Structures = <Application />;

const root = document.getElementById("root");

ReactDOM.hydrate(Structures, root);
