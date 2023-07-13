import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("/store/getProducts", async () => {
  const res = await axios.get("http://localhost:3001/products");
  console.log(res.data);
  return res.data;
});

export const postProducts = createAsyncThunk(
  "/store/postProducts",
  async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:3001/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "/store/deleteProducts",
  async ({ id }) => {
    const res = await axios.delete(`http://localhost:3001/products/${id}`);
    return res.data;
  }
);

export const getCurrentProductAsync = createAsyncThunk(
  "/store/getCurrentProductAsync",
  async (id) => {
    const req = await axios.get(`http://localhost:3001/currentProducts/${id}`);
    return req.data;
  }
);

// export const getImageAsync = createAsyncThunk(
//   "/store/getImageAsync",
//   async () => {
//     const res = await axios.get("http://localhost:3001/products");
//     return res.data;
//   }
// );

export const ReduxSlice = createSlice({
  name: "store",
  initialState: {
    products: [],
    currentProduct: [],

    isLoading: false,
  },
  extraReducers: {
    //get
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },

    [getCurrentProductAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentProductAsync.fulfilled]: (state, action) => {
      state.currentProduct = action.payload;
      state.isLoading = false;
    },
    //post
    [postProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postProducts.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
    //delete
    [deleteProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteProducts.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
    // [getImageAsync.pending]: (state, action) => {
    //   state.isLoadingImage = true;
    // },
    // [getImageAsync.fulfilled]: (state, action) => {
    //   state.images = action.payload;
    //   state.isLoadingImage = false;
    // },
  },
  reducers: {},
});

export const currentProducts = (state) => state.store.currentProduct;
export const products = (state) => state.store.products;
export default ReduxSlice.reducer;
