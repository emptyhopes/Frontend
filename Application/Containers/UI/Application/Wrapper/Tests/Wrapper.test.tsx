import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Wrapper } from "@/Application/Containers/UI/Application/Wrapper/Wrapper";

test("Wrapper", () => {
  const { container } = RenderTests(<Wrapper />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
