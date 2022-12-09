import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Header } from "@/Application/Containers/UI/Application/Header/Header";

import { store } from "@/Application/Ship/Store/index";

import { ThemeProvider } from "@/Application/Containers/Providers/ThemeProvider/ThemeProvider";

test("Header", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );

  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
