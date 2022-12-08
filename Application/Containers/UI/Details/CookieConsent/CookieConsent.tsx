import { useEffect, useState } from "react";

import { GetCookieConsent, SetCookieConsent } from "@/Application/Containers/Hooks/CookieConsent/UseCookieConsent";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";

const CookieConsent: React.FunctionComponent = (): React.ReactElement => {
  const [Consent, SetConsent] = useState("false");

  useEffect(() => {
    SetConsent(GetCookieConsent());
  }, []);

  return Consent === "true" ? (
    <></>
  ) : (
    <>
      <div>
        <Button
          onClick={() => {
            SetCookieConsent({ value: "true" });
            SetConsent("true");
          }}
        >
          Подтвердить
        </Button>
      </div>
    </>
  );
};

export { CookieConsent };
