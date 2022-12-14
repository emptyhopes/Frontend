import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Header } from "@/Application/Containers/UI/Application/Header/Header";

test("Header", () => {
  const { container } = RenderTests(<Header />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
