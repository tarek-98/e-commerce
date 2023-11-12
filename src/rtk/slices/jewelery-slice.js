import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";

export const fetchcJewelery = createAsyncThunk(
  "categorySlice/fetchProduct",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const data = await res.json();
    return data;
  }
);

export const jewelerySlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcJewelery.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export const {} = jewelerySlice.actions;
export default jewelerySlice.reducer;