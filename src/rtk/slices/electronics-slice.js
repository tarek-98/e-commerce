import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";

export const fetchcElectro = createAsyncThunk(
  "categorySlice/fetchProduct",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/electronics");
    const data = await res.json();
    return data;
  }
);

export const elecrtoSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcElectro.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const {} = elecrtoSlice.actions;
export default elecrtoSlice.reducer;