import { resolve } from "path";
import { readFileSync } from "fs";

import * as ReactDOM from "react-dom/server";
import * as express from "express";

import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import { store } from "@/Application/Ship/Store/index";
import { Application } from "@/Application/Containers/Application/Application";
import { Paths } from "@/Application/Ship/Utils/Paths/Paths";

const port = 80;

const server = express();

server.use((request, response, next) => {
  response.append("Access-Control-Allow-Origin", ["*"]);
  response.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.append("Access-Control-Allow-Headers", "Content-Type");
  response.append("Accept-Encoding", "gzip, compress, br");
  response.append("Cache-Control", "public, max-age=31536000");
  next();
});

server.get(
  /\.json|\.js|\.css|\.ico|\.svg|\.png|\.jpg|\.jpeg|\.txt$/,
  express.static(resolve(__dirname, "..")),
  (request, response) => {
    response.append("Content-Encoding", "br");
  },
);

server.use("*", (request, response) => {
  const sheet = new ServerStyleSheet();

  let HTML = readFileSync(Paths.GetAbsolutePath(Paths.paths.absolute.output, Paths.combined.production.html.index), {
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

  HTML = HTML.replace(
    // eslint-disable-next-line quotes
    "<style></style>",
    // eslint-disable-next-line quotes
    styles,
  );

  HTML = HTML.replace(
    // eslint-disable-next-line quotes
    '<div id="root"></div>',
    // eslint-disable-next-line quotes
    '<div id="root">' + Structures + "</div>",
  );

  response.send(HTML);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("http://localhost" + ":" + port);
});
