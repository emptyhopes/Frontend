import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { NotificationHelper } from "@/Application/Containers/UI/Details/Notification/Tests/NotificationHelper";

test("Notification", () => {
  const { container } = RenderTests(<NotificationHelper />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
