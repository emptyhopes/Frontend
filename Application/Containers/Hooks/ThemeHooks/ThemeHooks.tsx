import { SetThemeInterface } from "@/Application/Containers/Hooks/ThemeHooks/Types/ThemeHooksInterface";

const GetThemeStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme");
  }
};

const GetCurrentTheme = () => {
  const theme = GetThemeStorage();

  if (theme === null) {
    SetThemeStorage({ value: "light" });
    return "light";
  }

  if (theme === "light") return "light";
  if (theme === "dark") return "dark";
};

const SetThemeStorage = (consent: SetThemeInterface) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", consent.value);
  }
};

export { GetThemeStorage, GetCurrentTheme, SetThemeStorage };
