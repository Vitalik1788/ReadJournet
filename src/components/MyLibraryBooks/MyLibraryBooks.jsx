import { useDispatch, useSelector } from 'react-redux';
import {
  BookAuthor,
  BookBox,
  BookItem,
  BookTitle,
  BooksList,
  Box,
  CardContentBox,
  Icon,
  IconBook,
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
        <div style={{marginTop: "14px"}}>
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
                      <TrashBox>
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
