import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";

export const fetchcWomen = createAsyncThunk(
  "categorySlice/fetchProduct",
  async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    const data = await res.json();
    return data;
  }
);

export const womenSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcWomen.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const {} = womenSlice.actions;
export default womenSlice.reducer;
