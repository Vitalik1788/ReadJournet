
export const selectBooks = state => state.books.books;

export const selectTotalPages = state => state.books.totalPages;

export const selectLibraryRecommend = state => state.books.libraryRecommend;

export const selectUserBooks = state => state.books.userBooks;

export const selectIsLoading = state => state.books.isLoading;

export const selectError = state => state.books.error;

export const selectReadingBook = state => state.books.readingBook;