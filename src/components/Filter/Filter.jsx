import { Form, Formik } from 'formik';
import {
  FilterTitle,
  Box,
  FiltersBtn,
  InputBox,
  InputField,
  InputLabel,
  LibraryLinkBox,
  LinkText,
  WorkoutBox,
  WorkoutItemText,
  WorkoutList,
  WorkoutListPoint,
  WorkoutTitle,
  FilterBox,
  BooksBox,
  BooksText,
} from './Filter.styled';
import sprite from '../../assets/images/sprite.svg';
import books from '../../assets/images/books-desktop.jpg';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <FilterBox>
        <FilterTitle>Filters:</FilterTitle>
        <Formik
          initialValues={{
            bookTitle: '',
            author: '',
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
              <FiltersBtn type="submit">To apply</FiltersBtn>
            </Form>
          )}
        </Formik>
      </FilterBox>

      <WorkoutBox>
        <WorkoutTitle>Start your workout</WorkoutTitle>
        <ul>
          <WorkoutList>
            <WorkoutListPoint>1</WorkoutListPoint>
            <WorkoutItemText>
              Create a personal library:{' '}
              <span style={{ color: '#686868' }}>
                add the books you intend to read to it.
              </span>
            </WorkoutItemText>
          </WorkoutList>
          <WorkoutList>
            <WorkoutListPoint>2</WorkoutListPoint>
            <WorkoutItemText>
              Create your first workout:{' '}
              <span style={{ color: '#686868' }}>
                define a goal, choose a period, start training.
              </span>
            </WorkoutItemText>
          </WorkoutList>
        </ul>
        <LibraryLinkBox>
          <LinkText to="/library">My library</LinkText>
          <svg
            onClick={() => navigate('/library')}
            width={24}
            height={24}
            style={{ cursor: 'pointer' }}
          >
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </LibraryLinkBox>
      </WorkoutBox>

      <BooksBox>
        <img src={books} alt="books one by one" />
        <BooksText>
          "Books are <span style={{ color: '#F9F9F9' }}>windows</span> to the
          world, and reading is a journey into the unknown."
        </BooksText>
      </BooksBox>
    </Box>
  );
};

export default Filter;
