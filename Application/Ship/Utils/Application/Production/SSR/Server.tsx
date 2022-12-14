import { resolve } from "path";
import { readFileSync } from "fs";

import * as ReactDOM from "react-dom/server";
import * as express from "express";

import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import { store } from "@/Application/Ship/Store/index";
import { Application } from "@/Application/Containers/Application/Application";

import { SSR } from "@/Config/SSR";

const server = express();

server.get(/\.json|\.js|\.css|\.ico|\.svg|\.png|\.jpg|\.jpeg|\.txt$/, express.static(resolve(__dirname, "..")));

server.use("*", (request, response) => {
  const sheet = new ServerStyleSheet();

  let HTML = readFileSync(resolve(__dirname, "..", "index.html"), {
    encoding: "utf-8",
  });

  const Structures = ReactDOM.renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={request.originalUrl}>
          <Application />
        </StaticRouter>
      </Provider>,
    ),
  );

  const styles = sheet.getStyleTags();

  HTML = HTML.replace("<style></style>", styles);

  HTML = HTML.replace("<div id='root'></div>", "<div id='root'>" + Structures + "</div>");

  response.send(HTML);
});

server.listen(SSR.server.port, SSR.server.hostname);
