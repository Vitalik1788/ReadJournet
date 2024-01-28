import { createSlice } from '@reduxjs/toolkit';
import {
  addBookFromRecommend,
  addReadingBook,
  deleteUserBook,
  getLibraryRecommendBook,
  getRecommendBooks,
  getUserBooks,
} from './booksOperation';

const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
    totalPages: null,
    libraryRecommend: null,
    userBooks: [],
    isLoading: false,
    error: null,
    readingBook: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRecommendBooks.fulfilled, (state, action) => {
        state.books = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecommendBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecommendBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBookFromRecommend.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(addBookFromRecommend.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getLibraryRecommendBook.fulfilled, (state, action) => {
        state.libraryRecommend = action.payload.results;
      })
      .addCase(getUserBooks.fulfilled, (state, action) => {
        state.userBooks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteUserBook.fulfilled, (state, action) => {
        const index = state.userBooks.findIndex(
          (book) => book._id === action.payload.id
        );
        state.userBooks.splice(index, 1);
      })
      .addCase(addReadingBook.fulfilled, (state, action) => {
        state.readingBook = action.payload;
      }),
});

export const booksReducer = BooksSlice.reducer;
