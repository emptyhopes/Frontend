import { resolve } from "path";
import { readFileSync } from "fs";

import * as ReactDOM from "react-dom/server";
import * as express from "express";

import { Application } from "@/Application/Containers/Application/Application";
import { Paths } from "@/Application/Ship/Utils/Paths/Paths";

const port = 80;

const HTML = readFileSync(Paths.GetAbsolutePath(Paths.paths.absolute.output, Paths.combined.production.html.index), {
  encoding: "utf-8",
});

const content = HTML.replace(
  // eslint-disable-next-line quotes
  '<div id="root"></div>',
  // eslint-disable-next-line quotes
  '<div id="root">' + ReactDOM.renderToString(<Application />) + "</div>",
);

const server = express();

server.get(/\.json|\.js|\.css|\.txt$/, express.static(resolve(__dirname, "..")));

server.use("*", (request, response) => {
  response.status(200).send(content);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("http://localhost" + ":" + port);
});
