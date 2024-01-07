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
} from './LibraryDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLibraryRecommendBook } from '../../redux/books/booksOperation';
import { selectLibraryRecommend } from '../../redux/books/booksSelectors';
import sprite from "../../assets/images/sprite.svg";
import { useNavigate } from 'react-router-dom';

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
                  placeholder="I See You Are Interested In The Dark"
                />
              </InputBox>
              <InputBox>
                <InputLabel>The author:</InputLabel>
                <InputField
                  id="author"
                  type="text"
                  name="author"
                  value={values.author}
                  placeholder="Hilarion Pavlyuk"
                />
              </InputBox>
              <InputBox>
                <InputLabel>Number of pages:</InputLabel>
                <InputField
                  id="pages"
                  type="text"
                  name="pages"
                  value={values.pages}
                  placeholder="664"
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
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <LinkHome to="/recommended">Home</LinkHome>
          <svg
            onClick={() => navigate('/recommended')}
            width={20}
            height={20}
            style={{ cursor: 'pointer' }}
          >
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </div>
      </RecommendedBox>
    </Box>
  );
};

export default LibraryDashboard;
