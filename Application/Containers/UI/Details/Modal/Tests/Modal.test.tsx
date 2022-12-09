import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Modal } from "@/Application/Containers/UI/Details/Modal/Modal";

test("Modal", () => {
  const { container } = RenderTests(<Modal />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
