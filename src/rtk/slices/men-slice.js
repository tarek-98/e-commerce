import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";

export const fetchcMen = createAsyncThunk(
  "categorySlice/fetchProduct",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
    const data = await res.json();
    return data;
  }
);

export const menSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcMen.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const {} = menSlice.actions;
export default menSlice.reducer;