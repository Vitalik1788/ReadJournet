import { createSlice } from "@reduxjs/toolkit";
import { getRecommendBooks } from "./booksOperation";


const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
  },
  extraReducers: builder => builder
    .addCase(getRecommendBooks.fulfilled, (state, action) => {
      state.books = action.payload;
  })  
})


export const booksReducer = BooksSlice.reducer;