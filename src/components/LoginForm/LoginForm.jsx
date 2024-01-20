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
} from './LoginForm.styled';
import sprite from '../../assets/images/sprite.svg';
import logo from '../../assets/images/iconlogo.png';
import phone1x from '../../assets/images/auth-phone.jpg';
import phoneDesktop from '../../assets/images/phone-desktop.jpg';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';

let validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .trim()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter valid email')
    .required('Email is required'),
  password: Yup.string('')
    .trim()
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
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
    dispatch(login(values));
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
              {!isValid ? (
                <div style={{ position: 'relative' }}>
                  <InputsBox
                    style={
                      errors.email
                        ? { border: '1px solid #E90516' }
                        : { border: '1px solid #30B94D' }
                    }
                  >
                    <Label htmlFor="email">Mail:</Label>
                    <StyledField
                      id="email"
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Your@email.com"
                      autocomplete="off"
                    />
                  </InputsBox>
                  {errors.email ? (
                    <>
                      <Error style={{ color: '#E90516' }}>{errors.email}</Error>
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
                </div>
              ) : (
                <>
                  <InputsBox>
                    <Label htmlFor="email">Mail:</Label>
                    <StyledField
                      id="email"
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Your@email.com"
                      autocomplete="off"
                      
                    />
                  </InputsBox>
                </>
              )}

              {!isValid ? (
                <div style={{ position: 'relative' }}>
                  <InputsBox
                    style={
                      errors.password
                        ? { border: '1px solid #E90516' }
                        : { border: '1px solid #30B94D' }
                    }
                  >
                    <Label htmlFor="password">Password:</Label>
                    <StyledField
                      id="password"
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Yourpasswordhere"
                      autocomplete="off"
                    />
                  </InputsBox>
                  {errors.email ? (
                    <>
                      <Error style={{ color: '#E90516' }}>{errors.email}</Error>
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
                </div>
              ) : (
                <>
                  <InputsBox>
                    <Label htmlFor="password">Password:</Label>
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
                  </InputsBox>
                </>
              )}

              <BtnBox>
                <Btn type="submit" disabled={isSubmitting}>
                  Log In
                </Btn>
                <LoginLink to="/register">Don’t have an account? </LoginLink>
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

export default LoginForm;
