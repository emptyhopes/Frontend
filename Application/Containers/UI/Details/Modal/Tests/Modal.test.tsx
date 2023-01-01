import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { ModalHelper } from "@/Application/Containers/UI/Details/Modal/Tests/ModalHelper";

test("Modal", () => {
  const { container } = RenderTests(<ModalHelper />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
