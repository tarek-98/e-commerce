import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchcCategories = createAsyncThunk(
  "categorySlice/fetchProduct",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }
);

export const categorySlice = createSlice({
  initialState: [],
  name: "categorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcCategories.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
