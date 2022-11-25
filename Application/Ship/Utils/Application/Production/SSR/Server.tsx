import { resolve } from "path";
import { readFileSync } from "fs";

import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as express from "express";

import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import { store } from "@/Application/Ship/Store/index";
import { Application } from "@/Application/Containers/Application/Application";
import { Paths } from "@/Application/Ship/Utils/Paths/Paths";

const port = 80;

const HTML = readFileSync(Paths.GetAbsolutePath(Paths.paths.absolute.output, Paths.combined.production.html.index), {
  encoding: "utf-8",
});

const server = express();

server.get(/\.json|\.js|\.css|\.svg|\.png|\.jpg|\.jpeg|\.txt$/, express.static(resolve(__dirname, "..")));

server.use("*", (request, response) => {
  const Structures = (
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={request.url}>
          <Application />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );

  const content = HTML.replace(
    // eslint-disable-next-line quotes
    '<div id="root"></div>',
    // eslint-disable-next-line quotes
    '<div id="root">' + ReactDOM.renderToString(Structures) + "</div>",
  );

  response.status(200).send(content);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("http://localhost" + ":" + port);
});
