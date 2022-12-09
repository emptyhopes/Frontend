import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Breadcrumbs } from "@/Application/Containers/UI/Details/Breadcrumbs/Breadcrumbs";

test("Breadcrumbs", () => {
  const { container } = RenderTests(<Breadcrumbs />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
