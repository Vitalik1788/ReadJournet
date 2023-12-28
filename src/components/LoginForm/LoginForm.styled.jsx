import styled from '@emotion/styled';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

const field = Field;
const link = Link;

export const MainBox = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;

export const FormBox = styled.div`
  background-color: #1f1f1f;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 40px;
    padding-left: 64px;
    padding-right: 168px;
    padding-bottom: 214px;
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0;
    padding-right: 64px;
    padding-bottom: 40px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
`;

export const LogoText = styled.p`
  margin-left: 4px;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const FormTitle = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  font-family: 'Gilroy';
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    margin-top: 157px;
    margin-bottom: 40px;
    font-size: 64px;
    line-height: 60px;
    letter-spacing: 0.02em;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 107px;
  }
`;

export const TitleSpan = styled.span`
  color: rgba(227, 227, 227, 0.5);
`;

export const InputsBox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #686868;

  @media screen and (min-width: 768px) {
    top: 16px;
    left: 16px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }
`;

export const StyledField = styled(field)`
  width: 100%;
  margin-bottom: 4px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 75px;
  background-color: #262626;
  border: none;
  border-radius: 12px;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  outline: none;

  :hover,
  :focus {
    outline: none;
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  ::placeholder {
    color: #f9f9f9;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 95px;
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: -0.02em;
  }
`;

export const Error = styled.p`
  margin-bottom: 8px;
  padding-left: 14px;
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const IconInput = styled.svg`
  position: absolute;
  top: 13px;
  left: 261px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    top: 15px;
    left: 434px;
    width: 20px;
    height: 20px;
  }
`;

export const SVGWrapper = styled.svg`
  position: absolute;
  right: 20px;
  top: 14px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Btn = styled.button`
  margin-top: 12px;
  padding: 12px 29px 12px 29px;
  background-color: #f9f9f9;
  border: none;
  border-radius: 30px;
  font-family: 'Gilroy';
  font-weight: 700;
  line-height: 1.29;
  font-size: 14px;
  color: #1f1f1f;

  :hover,
  :focus {
    color: rgba(249, 249, 249, 1);
    background-color: #141414;
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  @media screen and (min-width: 768px) {
    padding: 16px 54px 16px 54px;
    margin-top: 52px;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0.02em;
  }
`;

export const LoginLink = styled(link)`
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: #686868;
  text-decoration: underline;

  :hover,
  :focus {
    color: #f9f9f9;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }
`;

export const PhoneBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #1f1f1f;
  border-radius: 30px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    max-width: 600px;
    margin: 0;
    padding-top: 80px;
    padding-left: 98px;
    padding-right: 98px;
  }
`;

export const MobilePhone = styled.img`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const DesktopPhone = styled.img`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
