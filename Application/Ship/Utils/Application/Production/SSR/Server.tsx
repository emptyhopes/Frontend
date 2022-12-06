import { resolve } from "path";
import { readFileSync } from "fs";

import * as ReactDOM from "react-dom/server";
import * as express from "express";
import * as compression from "compression";

import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import { store } from "@/Application/Ship/Store/index";
import { Application } from "@/Application/Containers/Application/Application";

const port = 80;

const server = express();

server.use(compression());

server.use((request, response, next) => {
  response.append(
    "Content-Security-Policy",
    "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self'; manifest-src 'self'; connect-src 'self' https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com;",
  );
  response.append("Cache-Control", "public, max-age=31536000");
  response.append("X-Frame-Options", "SAMEORIGIN");
  next();
});

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
