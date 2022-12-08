import { SetCookieConsentInterface } from "@/Application/Containers/Hooks/CookieConsent/Types/CookieConsentInterface";

const GetCookieConsent = () => {
  // REDUCTION
  if (typeof window !== "undefined") {
    return localStorage.getItem("jdc_consent");
  }
};

const SetCookieConsent = (consent: SetCookieConsentInterface) => {
  // REDUCTION
  if (typeof window !== "undefined") {
    localStorage.setItem("jdc_consent", consent.value);
  }
};

export { GetCookieConsent, SetCookieConsent };
