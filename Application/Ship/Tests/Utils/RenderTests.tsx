import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/Application/Ship/Store/index";

import { ThemeProvider } from "@/Application/Containers/Providers/ThemeProvider/ThemeProvider";

const RenderTests = (children: React.ReactElement) => {
  return render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>{children}</ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>,
  );
};

export { RenderTests };
