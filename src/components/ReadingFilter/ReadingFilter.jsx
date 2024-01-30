import { Form, Formik } from "formik";
import { Box, FilterBtn, FilterTitle, FilterWrapper, StyledField, StyledForm, StyledLabel } from "./ReadingFilter.styled";
import ProgressDefault from "../ReadProgressDefault/ReadProgressDefault";
import ReadingStats from "../ReadingStats/ReadingStats";


const ReadingFilter = ({ isStatsOpen }) => {
  return (
    <Box>
      <FilterWrapper>
        <FilterTitle>Start page:</FilterTitle>
        <Formik
          initialValues={{
            page: 0,
          }}
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
              <FilterBtn type="submit">To start</FilterBtn>
            </Form>
          )}
        </Formik>
      </FilterWrapper>
      {!isStatsOpen ? <ProgressDefault /> : <ReadingStats />}
    </Box>
  );
};

export default ReadingFilter;