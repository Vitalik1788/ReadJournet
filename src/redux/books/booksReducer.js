import { createSlice } from "@reduxjs/toolkit";
import { deleteUserBook, getLibraryRecommendBook, getRecommendBooks, getUserBooks } from "./booksOperation";


const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
    totalPages: null,
    libraryRecommend: null,
    userBooks: [],
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
    .addCase(deleteUserBook.fulfilled, (state, action) => {
      const index = state.userBooks.findIndex(book => book._id === action.payload.id);
      state.userBooks.splice(index, 1);
  })
})


export const booksReducer = BooksSlice.reducer;