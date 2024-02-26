import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  code: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
