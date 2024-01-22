import { selectBooks } from '../books/booksSelectors';

export const selectRecommendFilter = (state) => state.filters.recommendFilter;

export const selectVisibleRecommend = (state) => {
  const books = selectBooks(state);
  const filter = selectRecommendFilter(state);

  if (!books) {
    return;
  }
  const normalizedBookTitle = filter.bookTitle?.toLowerCase().trim();
  const normalizedAuthorTitle = filter.author?.toLowerCase().trim();

  return books.filter(
    (book) =>
      book.title?.toLowerCase().includes(normalizedBookTitle) &&
      book.author?.toLowerCase().includes(normalizedAuthorTitle)
  );
};
