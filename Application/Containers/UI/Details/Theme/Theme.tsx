import { useState, useEffect } from "react";

import { GetCurrentTheme, SetThemeStorage } from "@/Application/Containers/Hooks/ThemeHooks/ThemeHooks";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";

const Theme: React.FunctionComponent = (): React.ReactElement => {
  const [Theme, SetTheme] = useState({ value: "light" });

  const CurrentTheme = GetCurrentTheme();

  useEffect(() => {
    if (CurrentTheme) document.body.setAttribute("theme", CurrentTheme);
  }, [Theme]);

  const ChangeTheme = () => {
    if (Theme.value === "light") {
      SetThemeStorage({ value: "dark" });
      SetTheme({ value: "dark" });
    }

    if (Theme.value === "dark") {
      SetThemeStorage({ value: "light" });
      SetTheme({ value: "light" });
    }
  };

  return (
    <>
      <Button onClick={() => ChangeTheme()}>Сменить</Button>
    </>
  );
};

export { Theme };
