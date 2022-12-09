import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { CookieConsent } from "@/Application/Containers/UI/Details/CookieConsent/CookieConsent";

test("CookieConsent", () => {
  const { container } = RenderTests(<CookieConsent />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
