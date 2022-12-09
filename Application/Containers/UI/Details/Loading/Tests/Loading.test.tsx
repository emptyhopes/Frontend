import { RenderTests } from "@/Application/Ship/Tests/Utils/RenderTests";

import { Loading } from "@/Application/Containers/UI/Details/Loading/Loading";

test("Loading", () => {
  const { container } = RenderTests(<Loading />);

  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
