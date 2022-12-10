import { SetCookieConsentInterface } from "@/Application/Containers/Hooks/CookieConsentHooks/Types/CookieConsentHooksInterface";

const GetCookieConsentStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jdc_consent");
  }
};

const SetCookieConsentStorage = (consent: SetCookieConsentInterface) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jdc_consent", consent.value);
  }
};

export { GetCookieConsentStorage, SetCookieConsentStorage };
