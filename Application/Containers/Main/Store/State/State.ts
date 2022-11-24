import { StateInterface } from "@/Application/Containers/Main/Types/Store/State/StateInterface";

const State: StateInterface = {
  isLoading: false,
  error: "",
  users: [],
  counts: 0,
};

export { State };
