import { useEffect, useState } from "react";

import { PropsInterface } from "@/Application/Containers/Providers/LanguageProviders/Types/PropsInterface";
import { LanguageInterface } from "@/Application/Ship/Languages/Types/LanguageInterface";

import { LanguageContext } from "@/Application/Containers/Context/LanguageContext/LanguageContext";

import { GetLanguageObject, GetLanguages } from "@/Application/Containers/Hooks/LanguageHooks/LanguageHooks";

import { Russia } from "@/Application/Ship/Languages/Russia";

const LanguageProvider: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  const [language, SetLanguage] = useState<LanguageInterface>(Russia);

  useEffect(() => {
    SetLanguage(GetLanguageObject());
  }, []);

  return (
    <>
      <LanguageContext.Provider value={{ language: language, languages: GetLanguages(), SetLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </>
  );
};

export { LanguageProvider };
