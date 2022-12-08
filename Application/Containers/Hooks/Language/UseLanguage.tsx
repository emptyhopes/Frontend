import { LanguageInterface } from "@/Application/Ship/Languages/Types/LanguageInterface";
import { SetLanguageStorageInterface } from "@/Application/Containers/Hooks/Language/Types/LanguageInterface";

import { Russia } from "@/Application/Ship/Languages/Russia";
import { English } from "@/Application/Ship/Languages/English";

const GetLanguageStorage = () => {
  // REDUCTION
  if (typeof window !== "undefined") {
    return localStorage.getItem("language");
  }
};

const SetLanguageStorage = (language: SetLanguageStorageInterface) => {
  // REDUCTION
  if (typeof window !== "undefined") {
    localStorage.setItem("language", language.value);
  }
};

const GetLanguageObject = (): LanguageInterface => {
  const language = GetLanguageStorage();

  if (language === null) {
    SetLanguageStorage({ value: "ru-RU" });
    return Russia;
  }

  if (language === "ru-RU") return Russia;
  if (language === "en-EN") return English;
};

const GetLanguages = () => {
  const languages = { russia: Russia, english: English };

  return languages;
};

export { GetLanguageStorage, GetLanguageObject, GetLanguages, SetLanguageStorage };
