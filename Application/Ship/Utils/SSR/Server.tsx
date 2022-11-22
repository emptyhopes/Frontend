import { resolve } from "path";
import { readFileSync } from "fs";

import * as ReactDOM from "react-dom/server";
import * as express from "express";

import { Application } from "@/Application/Containers/Application/Application";
import { Paths } from "@/Application/Ship/Utils/Paths/Paths";

const port = 80;

const path = Paths.GetAbsolutePath(Paths.paths.absolute.output, Paths.combined.production.html.index);
const HTML = readFileSync(path, { encoding: "utf8" });

const content = HTML.replace(
  // eslint-disable-next-line quotes
  '<div id="root"></div>',
  // eslint-disable-next-line quotes
  '<div id="root">' + ReactDOM.renderToString(<Application />) + "</div>",
);

const server = express();

// console.log(resolve(__dirname, ".."));

// Поработать над regexp + не отдаёт сначала html, только #root
server.use(express.static(resolve(__dirname, "..")));

server.use("*", (request, response) => {
  response.status(200).send(content);
});

server.listen(port);
