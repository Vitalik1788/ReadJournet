import { useDispatch, useSelector } from 'react-redux';
import {
  BookAuthor,
  BookBox,
  BookItem,
  BookTitle,
  BooksList,
  Box,
  CardContentBox,
  FilterItem,
  FilterList,
  Icon,
  IconBook,
  IconUp,
  LibraryCardImg,
  MenuBox,
  Text,
  TitleBox,
  TitleFilter,
  TitleLibrary,
  Trash,
  TrashBox,
  Wrapper,
} from './MyLibraryBooks.styled';
import { useEffect, useState } from 'react';
import { selectUserBooks } from '../../redux/books/booksSelectors';
import { deleteUserBook, getUserBooks } from '../../redux/books/booksOperation';
import books_mobile from '../../assets/images/book-mobile.jpg';

const MyLibraryBooks = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterLabel, setFilterLabel] = useState('All books');
  const dispatch = useDispatch();
  const books = useSelector(selectUserBooks);

  useEffect(() => {
    dispatch(getUserBooks());
  }, [dispatch]);

  function toggleFilter() {
    if (filterOpen === false) {
      setFilterOpen(true);
    } else if (filterOpen !== false) {
      setFilterOpen(false);
    }
  }

  return (
    <Box>
      <TitleBox>
        <TitleLibrary>My library</TitleLibrary>
        <div>
          <MenuBox onClick={() => toggleFilter()}>
            <TitleFilter>{filterLabel}</TitleFilter>
            {!filterOpen ? <Icon /> : <IconUp />}
          </MenuBox>
          {filterOpen && (
            <FilterList>
              <FilterItem
                style={
                  filterLabel === 'Unread'
                    ? { color: '#F9F9F9' }
                    : { color: '#686868' }
                }
                onClick={() => setFilterLabel('Unread')}
              >
                Unread
              </FilterItem>
              <FilterItem
                style={
                  filterLabel === 'In progress'
                    ? { color: '#F9F9F9' }
                    : { color: '#686868' }
                }
                onClick={() => setFilterLabel('In progress')}
              >
                In progress
              </FilterItem>
              <FilterItem
                style={
                  filterLabel === 'Done'
                    ? { color: '#F9F9F9' }
                    : { color: '#686868' }
                }
                onClick={() => setFilterLabel('Done')}
              >
                Done
              </FilterItem>
              <FilterItem
                style={
                  filterLabel === 'All books'
                    ? { color: '#F9F9F9' }
                    : { color: '#686868' }
                }
                onClick={() => setFilterLabel('All books')}
              >
                All books
              </FilterItem>
            </FilterList>
          )}
        </div>
      </TitleBox>

      {!books ? (
        <Wrapper>
          <BookBox>
            <IconBook src={books_mobile} alt="books" />
          </BookBox>
          <Text>
            {' '}
            To start training, add{' '}
            <span style={{ color: '#686868' }}>some of your books</span> or from
            the recommended ones
          </Text>
        </Wrapper>
      ) : (
        <div style={{ marginTop: '14px' }}>
          <BooksList>
            {books &&
              books.map((book) => {
                return (
                  <BookItem key={book._id}>
                    <LibraryCardImg src={book.imageUrl} alt="Book cover" />
                    <CardContentBox>
                      <div style={{ maxWidth: '95px' }}>
                        <BookTitle>{book.title}</BookTitle>
                        <BookAuthor>{book.author}</BookAuthor>
                      </div>
                      <TrashBox
                        onClick={() => dispatch(deleteUserBook(book._id))}
                      >
                        <Trash />
                      </TrashBox>
                    </CardContentBox>
                  </BookItem>
                );
              })}
          </BooksList>
        </div>
      )}
    </Box>
  );
};

export default MyLibraryBooks;
