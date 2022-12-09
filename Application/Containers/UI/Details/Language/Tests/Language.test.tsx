import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Language } from "@/Application/Containers/UI/Details/Language/Language";

test("Language", () => {
  const { container } = RenderTests(<Language />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
