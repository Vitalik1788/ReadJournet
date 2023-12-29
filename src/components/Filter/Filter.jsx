import { Form, Formik } from 'formik';
import { FilterTitle, FiltersBox, FiltersBtn, InputBox, InputField, InputLabel, LibraryLinkBox, LinkText, WorkoutBox, WorkoutItemText, WorkoutList, WorkoutListPoint, WorkoutTitle } from './Filter.styled';
import sprite from '../../assets/images/sprite.svg';

const Filter = () => {
  return (
    <FiltersBox>
      <div>
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
      </div>

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
          <LinkText>My library</LinkText>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </LibraryLinkBox>
      </WorkoutBox>
    </FiltersBox>
  );
};

export default Filter;
