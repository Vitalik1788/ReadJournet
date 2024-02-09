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
import {
  selectError,
  selectReadingBook,
} from '../../redux/books/booksSelectors';
import { endReading, startReading } from '../../redux/books/booksOperation';
import { toast } from 'react-toastify';

const ReadingFilter = ({ StatsToogle, isReading }) => {
  const dispatch = useDispatch();
  const book = useSelector(selectReadingBook);
  const error = useSelector(selectError);

  function handleSubmit(values) {
    if (error) {
      return toast.error(error);
    }

    if (!isReading) {
      StatsToogle();
      dispatch(startReading({ id: book._id, page: values.page }));
    } else if (isReading) {
      StatsToogle();
      dispatch(endReading({ id: book._id, page: values.page }));
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
                <FilterBtn type="submit">To stop</FilterBtn>
              )}
            </Form>
          )}
        </Formik>
      </FilterWrapper>
      <div>
        {book?.status === 'unread' ? <ProgressDefault /> : <ReadingStats book={book} />}
      </div>
    </Box>
  );
};

export default ReadingFilter;
