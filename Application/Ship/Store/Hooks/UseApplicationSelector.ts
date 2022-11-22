import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "@/Application/Ship/Store/Reducers/index";

const UseApplicationSelector: TypedUseSelectorHook<RootState> = useSelector;

export { UseApplicationSelector };
