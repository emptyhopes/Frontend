import { FunctionComponent } from "react";

import { InputInterface } from "@/Application/Containers/UI/Input/Types/InputInterface";

const Input: FunctionComponent<InputInterface> = ({ children }) => {
  return <input>{children}</input>;
};

export { Input };
