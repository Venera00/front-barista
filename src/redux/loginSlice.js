import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  code: "",
};

const loginSlice = createSlice({
  // email: 'email',
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
