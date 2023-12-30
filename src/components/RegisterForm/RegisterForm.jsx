import {
  Btn,
  BtnBox,
  DesktopPhone,
  Error,
  FormBox,
  FormTitle,
  IconInput,
  InputsBox,
  Label,
  LoginLink,
  LogoBox,
  LogoText,
  MainBox,
  MobilePhone,
  PhoneBox,
  SVGWrapper,
  StyledField,
  TitleSpan,
} from './RegisterForm.styled';
import sprite from '../../assets/images/sprite.svg';
import logo from '../../assets/images/iconlogo.png';
import phone1x from '../../assets/images/auth-phone.jpg';
import phoneDesktop from '../../assets/images/phone-desktop.jpg';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';

let validationSchema = Yup.object({
  name: Yup.string('Enter your name')
    .min(2, 'Name should be of minimum 2 characters length')
    .trim()
    .required('Name is required'),
  email: Yup.string('Enter your email')
    .trim()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter valid email')
    .required('Email is required'),
  password: Yup.string('')
    .trim()
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const RegisterForm = () => {
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const dispatch = useDispatch();

  function togglePassword() {
    if (passwordIsOpen) {
      setPasswordIsOpen(false);
      return;
    }
    setPasswordIsOpen(true);
  }

  function handleSubmit(values) {
    dispatch(register(values));
  }

  return (
    <MainBox>
      <FormBox>
        <LogoBox>
          <img src={logo} alt="logo" />
          <LogoText>READ JOURNEY</LogoText>
        </LogoBox>
        <FormTitle>
          Expand your mind, reading <TitleSpan>a book</TitleSpan>
        </FormTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, isSubmitting, errors, isValid }) => (
            <Form>
              <InputsBox>
                <Label htmlFor="name">Name:</Label>
                {!isValid ? (
                  <>
                    <StyledField
                      style={
                        errors.name
                          ? { border: '1px solid #E90516' }
                          : { border: '1px solid #30B94D' }
                      }
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      placeholder="Ilona Ratushniak"
                    />
                    {errors.name ? (
                      <>
                        <Error style={{ color: '#E90516' }}>
                          {errors.name}
                        </Error>
                        <IconInput>
                          <use href={`${sprite}#icon-wrong`}></use>
                        </IconInput>
                      </>
                    ) : (
                      <>
                        <Error style={{ color: '#30B94D' }}>
                          Name is correct
                        </Error>
                        <IconInput>
                          <use href={`${sprite}#icon-correct`}></use>
                        </IconInput>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <StyledField
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      placeholder="Ilona Ratushniak"
                    />
                  </>
                )}
              </InputsBox>

              <InputsBox>
                <Label htmlFor="email">Mail:</Label>
                {!isValid ? (
                  <>
                    <StyledField
                      style={
                        errors.email
                          ? { border: '1px solid #E90516' }
                          : { border: '1px solid #30B94D' }
                      }
                      id="email"
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Your@email.com"
                    />
                    {errors.email ? (
                      <>
                        <Error style={{ color: '#E90516' }}>
                          {errors.email}
                        </Error>
                        <IconInput>
                          <use href={`${sprite}#icon-wrong`}></use>
                        </IconInput>
                      </>
                    ) : (
                      <>
                        <Error style={{ color: '#30B94D' }}>
                          Email is correct
                        </Error>
                        <IconInput>
                          <use href={`${sprite}#icon-correct`}></use>
                        </IconInput>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <StyledField
                      id="email"
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Your@email.com"
                    />
                  </>
                )}
              </InputsBox>

              <InputsBox>
                <Label htmlFor="password">Password:</Label>
                {!isValid ? (
                  <>
                    <StyledField
                      style={
                        errors.password
                          ? { border: '1px solid #E90516' }
                          : { border: '1px solid #30B94D' }
                      }
                      id="password"
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Yourpasswordhere"
                    />
                    {errors.password ? (
                      <>
                        <Error style={{ color: '#E90516' }}>
                          {errors.password}
                        </Error>
                        <IconInput>
                          <use href={`${sprite}#icon-wrong`}></use>
                        </IconInput>
                      </>
                    ) : (
                      <>
                        <Error style={{ color: '#30B94D' }}>
                          Password is secure
                        </Error>
                        <IconInput>
                          <use href={`${sprite}#icon-correct`}></use>
                        </IconInput>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <StyledField
                      id="password"
                      type={passwordIsOpen ? 'text' : 'password'}
                      name="password"
                      value={values.password}
                      placeholder="Yourpasswordhere"
                    />
                    <SVGWrapper onClick={() => togglePassword()}>
                      {passwordIsOpen ? (
                        <use href={`${sprite}#icon-eyeClose`} />
                      ) : (
                        <use href={`${sprite}#icon-eyeOpen`} />
                      )}
                    </SVGWrapper>
                  </>
                )}
              </InputsBox>

              <BtnBox>
                <Btn type="submit" disabled={isSubmitting}>
                  Registration
                </Btn>
                <LoginLink to='/login'>Already have an account?</LoginLink>
              </BtnBox>
            </Form>
          )}
        </Formik>
      </FormBox>

      <PhoneBox>
        <MobilePhone src={phone1x} alt="photo iphone 15" />
        <DesktopPhone src={phoneDesktop} alt="photo iphone 15" />
      </PhoneBox>
    </MainBox>
  );
};

export default RegisterForm;
