import { Form, Formik } from "formik";
import { Box, FilterBtn, FilterTitle, StyledField, StyledForm, StyledLabel } from "./ReadingFilter.styled";


const ReadingFilter = () => {

  return (
    <Box>
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
    </Box>
  );
}

export default ReadingFilter;