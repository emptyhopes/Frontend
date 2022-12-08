import { LanguageInterface } from "@/Application/Ship/Languages/Types/LanguageInterface";

interface LanguageContextInterface {
  language: LanguageInterface;
  languages: {
    russia: LanguageInterface;
    english: LanguageInterface;
  };
  SetLanguage: (value: LanguageInterface) => void;
}

export { LanguageContextInterface };
