import { createSlice } from "@reduxjs/toolkit";
import { getLibraryRecommendBook, getRecommendBooks } from "./booksOperation";


const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
    totalPages: null,
    libraryRecommend: null,
  },
  extraReducers: builder => builder
    .addCase(getRecommendBooks.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.totalPages = action.payload.totalPages;
    }) 
    .addCase(getLibraryRecommendBook.fulfilled, (state, action) => {
      state.libraryRecommend = action.payload.results; 
  })
})


export const booksReducer = BooksSlice.reducer;