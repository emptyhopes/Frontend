import { readFileSync } from "fs";

import * as React from "react";
import * as ReactDOM from "react-dom/server";

import * as express from "express";

import { Application } from "@/Application/Containers/Application/Application";
import { Paths } from "@/Application/Ship/Utils/Paths/Paths";

const GetFileData = (path, encoding) => {
  const data = readFileSync(path, { encoding: encoding });

  return data;
};

const port = 80;

const path = Paths.GetAbsolutePath(Paths.paths.absolute.output, Paths.combined.production.html.index);
const HTML = GetFileData(path, "utf-8");

const content = HTML.replace(
  // eslint-disable-next-line quotes
  '<div id="root"></div>',
  // eslint-disable-next-line quotes
  '<div id="root>"' + ReactDOM.renderToString(<Application />) + "</div>",
);

const server = express();

server.use("*", (request, response) => {
  response.status(200).send(content);
});

server.use("*", express.static(Paths.paths.absolute.output));

server.listen(port, () => console.log("http://localhost" + ":" + port));
