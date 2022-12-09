import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Navbar } from "@/Application/Containers/UI/Application/Navbar/Navbar";

test("Navbar", () => {
  const { container } = RenderTests(<Navbar />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
