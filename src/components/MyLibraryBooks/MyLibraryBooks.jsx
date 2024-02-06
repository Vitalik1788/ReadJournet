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
import {
  selectIsLoading,
  selectUserBooks,
} from '../../redux/books/booksSelectors';
import { deleteUserBook, getUserBooks } from '../../redux/books/booksOperation';
import books_mobile from '../../assets/images/book-mobile.jpg';
import BooksDetails from '../BooksDetailsModal/BooksDetails';
import Spinner from '../Spinner/Spinner';
import default_book_cover from '../../assets/images/no_book_cover.jpg';
import { setReadFilter } from '../../redux/filters/filtersRuducer';
import { selectVisibleRead } from '../../redux/filters/filtersSelectors';

const MyLibraryBooks = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterLabel, setFilterLabel] = useState('All books');
  const [bookForModal, setBookForModal] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector(selectUserBooks);
  const filteredBooks = useSelector(selectVisibleRead);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserBooks());
    dispatch(setReadFilter(filterLabel));
  }, [dispatch, filterLabel]);

  function toggleFilter() {
    if (filterOpen === false) {
      setFilterOpen(true);
    } else if (filterOpen !== false) {
      setFilterOpen(false);
    }
  }

  function modalOpen() {
    setIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowY = 'unset';
  }

  return (
    <>
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
                    filterLabel === 'unread'
                      ? { color: '#F9F9F9' }
                      : { color: '#686868' }
                  }
                  onClick={() => setFilterLabel('unread')}
                >
                  Unread
                </FilterItem>
                <FilterItem
                  style={
                    filterLabel === 'in-progress'
                      ? { color: '#F9F9F9' }
                      : { color: '#686868' }
                  }
                  onClick={() => setFilterLabel('in-progress')}
                >
                  In progress
                </FilterItem>
                <FilterItem
                  style={
                    filterLabel === 'done'
                      ? { color: '#F9F9F9' }
                      : { color: '#686868' }
                  }
                  onClick={() => setFilterLabel('done')}
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

        {books.length === 0 ? (
          <Wrapper>
            <BookBox>
              <IconBook src={books_mobile} alt="books" />
            </BookBox>
            <Text>
              {' '}
              To start training, add{' '}
              <span style={{ color: '#686868' }}>some of your books</span> or
              from the recommended ones
            </Text>
          </Wrapper>
        ) : (
          <div style={{ marginTop: '14px' }}>
            {isLoading ? (
              <Spinner />
            ) : (
              <BooksList>
                {filteredBooks &&
                  filteredBooks.map((book) => {
                    return (
                      <BookItem key={book._id}>
                        <LibraryCardImg
                          src={
                            book.imageUrl ? book.imageUrl : default_book_cover
                          }
                          alt="Book cover"
                          onClick={() => {
                            setBookForModal(book), modalOpen();
                          }}
                        />
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
            )}
          </div>
        )}
      </Box>
      <BooksDetails
        bookForModal={bookForModal}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default MyLibraryBooks;
