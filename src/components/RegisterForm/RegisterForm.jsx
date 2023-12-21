import {
  Btn,
  BtnBox,
  FormBox,
  FormTitle,
  InputsBox,
  Label,
  LoginLink,
  StyledField,
  TitleSpan,
} from './RegisterForm.styled';
import logo from '../../assets/images/iconlogo.png';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  userName: yup.string('Enter your name').trim().required('Name is required'),
  email: yup
    .string('Enter your email')
    .trim()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter valid email')
    .required('Email is required'),
  password: yup
    .string('')
    .trim()
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const RegisterForm = () => {
  return (
    <FormBox>
      <img src={logo} alt="logo" />
      <FormTitle>
        Expand your mind, reading <TitleSpan>a book</TitleSpan>
      </FormTitle>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <InputsBox>
              <Label htmlFor="userName">Name:</Label>
              <StyledField
                id="userName"
                type="text"
                name="userName"
                value={values.userName}
                placeholder="Ilona Ratushniak"
              />
            </InputsBox>

            <InputsBox>
              <Label htmlFor="email">Mail:</Label>
              <StyledField
                id="email"
                type="email"
                name="email"
                value={values.email}
                placeholder="Your@email.com"
              />
            </InputsBox>

            <InputsBox>
              <Label htmlFor="password">Password:</Label>
              <StyledField
                id="password"
                type="password"
                name="password"
                value={values.password}
                placeholder="Yourpasswordhere"
              />
            </InputsBox>

            <BtnBox>
              <Btn type="submit" disabled={isSubmitting}>
                Registration
              </Btn>
              <LoginLink>Already have an account?</LoginLink>
            </BtnBox>
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default RegisterForm;
