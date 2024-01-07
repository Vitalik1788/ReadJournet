import { useDispatch, useSelector } from 'react-redux';
import {
  BookBox,
  Box,
  Icon,
  IconBook,
  LibraryCardImg,
  MenuBox,
  Text,
  TitleBox,
  TitleFilter,
  TitleLibrary,
  Wrapper,
} from './MyLibraryBooks.styled';
import { useEffect } from 'react';
import { selectUserBooks } from '../../redux/books/booksSelectors';
import { getUserBooks } from '../../redux/books/booksOperation';
import books_mobile from '../../assets/images/book-mobile.jpg';

const MyLibraryBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectUserBooks);

  useEffect(() => {
    dispatch(getUserBooks());
  }, [dispatch]);

  console.log(books);

  return (
    <Box>
      <TitleBox>
        <TitleLibrary>My library</TitleLibrary>
        <MenuBox>
          <TitleFilter>All books</TitleFilter>
          <Icon />
        </MenuBox>
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
        <div>
          <ul>
            {books &&
              books.map((book) => {
                return (
                  <li key={book._id}>
                    <LibraryCardImg src={book.imageUrl} alt="Book cover" />
                    
                  </li>);
              })}
          </ul>
        </div>
      )}
    </Box>
  );
};

export default MyLibraryBooks;
