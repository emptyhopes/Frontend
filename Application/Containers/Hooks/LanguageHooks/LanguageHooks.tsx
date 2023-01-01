import { LanguageInterface } from "@/Application/Ship/Languages/Types/LanguageInterface";
import { SetLanguageStorageInterface } from "@/Application/Containers/Hooks/LanguageHooks/Types/LanguageHooksInterface";

import { Russia } from "@/Application/Ship/Languages/Russia";
import { English } from "@/Application/Ship/Languages/English";

const GetLanguageStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language");
  }
};

const GetLanguageObject = (): LanguageInterface => {
  const language = GetLanguageStorage();

  if (language === "ru-RU") return Russia;
  if (language === "en-EN") return English;

  SetLanguageStorage({ value: "ru-RU" });
  return Russia;
};

const GetLanguages = () => {
  const languages = { russia: Russia, english: English };

  return languages;
};

const SetLanguageStorage = (language: SetLanguageStorageInterface) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", language.value);
  }
};

export { GetLanguageStorage, GetLanguageObject, GetLanguages, SetLanguageStorage };
