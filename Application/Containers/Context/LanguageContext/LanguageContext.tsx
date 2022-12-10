/* eslint-disable @typescript-eslint/no-empty-function */

import * as React from "react";

import { LanguageContextInterface } from "@/Application/Containers/Context/LanguageContext/Types/LanguageContextInterface";

import { GetLanguageObject, GetLanguages } from "@/Application/Containers/Hooks/LanguageHooks/LanguageHooks";

const LanguageContext = React.createContext<LanguageContextInterface>({
  language: GetLanguageObject(),
  languages: GetLanguages(),
  SetLanguage: () => {},
});

export { LanguageContext };
