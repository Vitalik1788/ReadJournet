import { selectBooks } from '../books/booksSelectors';
import { selectUserBooks } from '../books/booksSelectors';

export const selectRecommendFilter = (state) => state.filters.recommendFilter;
export const selectReadFilter = (state) => state.filters.readFilter;

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

export const selectVisibleRead = (state) => {
  const books = selectUserBooks(state);
  const filter = selectReadFilter(state);

  if (!books) {
    return;
  }

  if (filter === "All books") {
    return books;
  }

  return books.filter((book) => book.status.includes(filter));
}
