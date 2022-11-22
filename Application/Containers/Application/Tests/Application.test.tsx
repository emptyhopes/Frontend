import { render, screen } from "@testing-library/react";

import { Application } from "@/Application/Containers/Application/Application";

describe("Application", () => {
  test("Render", () => {
    render(<Application />);

    const StyledApplication = screen.getByTestId("StyledApplication");
    expect(StyledApplication).toBeInTheDocument;
    expect(StyledApplication).toMatchSnapshot();
  });
});
