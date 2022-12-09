import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Input } from "@/Application/Containers/UI/Details/Input/Input";

test("Input", () => {
  const { container } = RenderTests(<Input type={""} placeholder={""} />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
