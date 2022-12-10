import { useContext } from "react";

import { GetLanguageStorage, SetLanguageStorage } from "@/Application/Containers/Hooks/LanguageHooks/LanguageHooks";

import { LanguageContext } from "@/Application/Containers/Context/LanguageContext/LanguageContext";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";

const Language: React.FunctionComponent = (): React.ReactElement => {
  const { languages, SetLanguage } = useContext(LanguageContext);

  const SetLanguageObject = () => {
    const language = GetLanguageStorage();

    if (language === null) {
      SetLanguageStorage({ value: "ru-RU" });
      SetLanguage(languages.russia);
    }

    if (language === "ru-RU") SetLanguage(languages.russia);
    if (language === "en-EN") SetLanguage(languages.english);
  };

  return (
    <>
      <Button
        onClick={() => {
          SetLanguageStorage({ value: "ru-RU" });
          SetLanguageObject();
        }}
      >
        Русский
      </Button>
      <Button
        onClick={() => {
          SetLanguageStorage({ value: "en-EN" });
          SetLanguageObject();
        }}
      >
        Английский
      </Button>
    </>
  );
};

export { Language };
