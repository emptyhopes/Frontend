import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Button } from "@/Application/Containers/UI/Details/Button/Button";

test("Button", () => {
  const { container } = RenderTests(<Button />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
