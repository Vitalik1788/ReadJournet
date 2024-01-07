import { createSlice } from "@reduxjs/toolkit";
import { getLibraryRecommendBook, getRecommendBooks, getUserBooks } from "./booksOperation";


const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
    totalPages: null,
    libraryRecommend: null,
    userBooks: null,
  },
  extraReducers: builder => builder
    .addCase(getRecommendBooks.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.totalPages = action.payload.totalPages;
    }) 
    .addCase(getLibraryRecommendBook.fulfilled, (state, action) => {
      state.libraryRecommend = action.payload.results; 
    })
    .addCase(getUserBooks.fulfilled, (state, action) => {
      state.userBooks = action.payload;
  })
})


export const booksReducer = BooksSlice.reducer;