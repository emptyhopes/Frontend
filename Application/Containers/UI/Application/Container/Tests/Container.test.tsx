import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Container } from "@/Application/Containers/UI/Application/Container/Container";

test("Container", () => {
  const { container } = RenderTests(<Container />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
