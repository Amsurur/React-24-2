import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api = "https://6697657702f3150fb66d72df.mockapi.io/users";
export const GetData = createAsyncThunk("todo/GetData", async () => {
  try {
    const { data } = await axios.get(api);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  data: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetData.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(GetData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(GetData.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default todoSlice.reducer;
