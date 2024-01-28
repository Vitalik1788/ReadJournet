import { Form, Formik } from 'formik';
import {
  BookAuthor,
  BookTitle,
  Box,
  CardImg,
  CardItem,
  CardList,
  FilterBox,
  FilterTitle,
  FiltersBtn,
  InputBox,
  InputField,
  InputLabel,
  LinkHome,
  RecommendedBox,
  RecommendedTitle,
  SVGArrow,
} from './LibraryDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { getLibraryRecommendBook } from '../../redux/books/booksOperation';
import { selectLibraryRecommend } from '../../redux/books/booksSelectors';
import sprite from '../../assets/images/sprite.svg';
import { useNavigate } from 'react-router-dom';

let validationSchema = Yup.object({
  bookTitle: Yup.string('Enter book title')
    .trim()
    .required('Book title is required'),
  author: Yup.string('Enter book author').trim().required('Author is required'),
  pages: Yup.number('Enter the number of pages in the book').required('Password is required'),
});

const LibraryDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(selectLibraryRecommend);

  useEffect(() => {
    dispatch(getLibraryRecommendBook());
  }, [dispatch]);

  return (
    <Box>
      <FilterBox>
        <FilterTitle>Filters:</FilterTitle>
        <Formik
          initialValues={{
            bookTitle: '',
            author: '',
            pages: '',
          }}
          validationSchema={validationSchema}
        >
          {({ values }) => (
            <Form>
              <InputBox>
                <InputLabel>Book title:</InputLabel>
                <InputField
                  id="bookTitle"
                  type="text"
                  name="bookTitle"
                  value={values.bookTitle}
                  placeholder="Enter text"
                />
              </InputBox>
              <InputBox>
                <InputLabel>The author:</InputLabel>
                <InputField
                  id="author"
                  type="text"
                  name="author"
                  value={values.author}
                  placeholder="Enter text"
                />
              </InputBox>
              <InputBox>
                <InputLabel>Number of pages:</InputLabel>
                <InputField
                  id="pages"
                  type="number"
                  name="pages"
                  value={values.pages}
                  placeholder="0"
                />
              </InputBox>
              <FiltersBtn type="submit">Add book</FiltersBtn>
            </Form>
          )}
        </Formik>
      </FilterBox>

      <RecommendedBox>
        <RecommendedTitle>Recommended books</RecommendedTitle>
        <CardList>
          {books &&
            books.map((book) => {
              return (
                <CardItem key={book._id}>
                  <CardImg src={book.imageUrl} alt="Book cover" />
                  <BookTitle>{book.title}</BookTitle>
                  <BookAuthor>{book.author}</BookAuthor>
                </CardItem>
              );
            })}
        </CardList>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LinkHome to="/recommended">Home</LinkHome>
          <SVGArrow onClick={() => navigate('/recommended')}>
            <use href={`${sprite}#icon-arrow`}></use>
          </SVGArrow>
        </div>
      </RecommendedBox>
    </Box>
  );
};

export default LibraryDashboard;
