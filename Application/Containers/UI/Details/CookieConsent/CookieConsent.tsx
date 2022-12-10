import { useEffect, useState } from "react";

import {
  GetCookieConsentStorage,
  SetCookieConsentStorage,
} from "@/Application/Containers/Hooks/CookieConsentHooks/CookieConsentHooks";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";

const CookieConsent: React.FunctionComponent = (): React.ReactElement => {
  const [Consent, SetConsent] = useState("false");

  useEffect(() => {
    SetConsent(GetCookieConsentStorage());
  }, [Consent]);

  const ConsentFunction = () => {
    SetCookieConsentStorage({ value: "true" });
    SetConsent("true");
  };

  return Consent === "true" ? (
    <></>
  ) : (
    <>
      <div>
        <Button onClick={ConsentFunction}>Подтвердить</Button>
      </div>
    </>
  );
};

export { CookieConsent };
