import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Theme } from "@/Application/Containers/UI/Details/Theme/Theme";

test("Theme", () => {
  const { container } = RenderTests(<Theme />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
