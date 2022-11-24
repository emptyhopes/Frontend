import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const FetchUsers = createAsyncThunk("user/FetchUsers", async (_, ThunkAPI) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    return ThunkAPI.rejectWithValue("Произошла ошибка.");
  }
});

export { FetchUsers };
