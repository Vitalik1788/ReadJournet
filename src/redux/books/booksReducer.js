import { createSlice } from "@reduxjs/toolkit";
import { getRecommendBooks } from "./booksOperation";


const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
    totalPages: null,
  },
  extraReducers: builder => builder
    .addCase(getRecommendBooks.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.totalPages = action.payload.totalPages;
  })  
})


export const booksReducer = BooksSlice.reducer;