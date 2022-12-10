import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Content } from "@/Application/Containers/UI/Application/Content/Content";

test("Content", () => {
  const { container } = RenderTests(<Content />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
