import { createSlice } from "@reduxjs/toolkit";


const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  }
})


export const booksReducer = BooksSlice.reducer;