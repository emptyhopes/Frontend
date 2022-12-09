import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Switch } from "@/Application/Containers/UI/Details/Switch/Switch";

test("Switch", () => {
  const { container } = RenderTests(<Switch />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
