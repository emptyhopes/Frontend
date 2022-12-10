import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/Application/Ship/Store/index";

const RenderTests = (children: React.ReactElement) => {
  return render(
    <>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </>,
  );
};

export { RenderTests };
