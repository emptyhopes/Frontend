import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Footer } from "@/Application/Containers/UI/Application/Footer/Footer";

test("Footer", () => {
  const { container } = RenderTests(<Footer />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
