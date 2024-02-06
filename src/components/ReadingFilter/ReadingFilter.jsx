import { Form, Formik } from 'formik';
import {
  Box,
  FilterBtn,
  FilterTitle,
  FilterWrapper,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ReadingFilter.styled';
import ProgressDefault from '../ReadProgressDefault/ReadProgressDefault';
import ReadingStats from '../ReadingStats/ReadingStats';
import { useDispatch, useSelector } from 'react-redux';
import { selectReadingBook } from '../../redux/books/booksSelectors';
import { endReading, startReading } from '../../redux/books/booksOperation';

const ReadingFilter = ({ StatsToogle, isReading }) => {
  const dispatch = useDispatch();
  const book = useSelector(selectReadingBook);

  function handleSubmit(values) {
    if (values) {
      StatsToogle();
      const data = {
        id: book._id,
        page: values.page,
      };
      dispatch(startReading(data));
    }
  }

  return (
    <Box>
      <FilterWrapper>
        <FilterTitle>Start page:</FilterTitle>
        <Formik
          initialValues={{
            page: 0,
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values }) => (
            <Form>
              <StyledForm>
                <StyledLabel htmlFor="page">Page number:</StyledLabel>
                <StyledField
                  id="page"
                  name="page"
                  type="number"
                  values={values.page}
                />
              </StyledForm>
              {!isReading ? (
                <FilterBtn type="submit">To start</FilterBtn>
              ) : (
                <FilterBtn
                  type="submit"
                  onClick={() => {
                    dispatch(endReading({ id: book._id, page: values.page }));
                  }}
                >
                  To stop
                </FilterBtn>
              )}
            </Form>
          )}
        </Formik>
      </FilterWrapper>
      {book.status === 'unread' ? <ProgressDefault /> : <ReadingStats />}
    </Box>
  );
};

export default ReadingFilter;
