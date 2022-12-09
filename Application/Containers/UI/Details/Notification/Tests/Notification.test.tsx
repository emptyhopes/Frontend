import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Notification } from "@/Application/Containers/UI/Details/Notification/Notification";

test("Notification", () => {
  const { container } = RenderTests(<Notification />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
