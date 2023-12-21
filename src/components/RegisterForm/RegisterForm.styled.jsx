import styled from '@emotion/styled';
import { Field } from 'formik';

const field = Field;

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
  }

  @media screen and (min-width: 1280px) {
    width: 1216px;
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
`;

export const StyledField = styled(field)`
  width: 100%;
  margin-bottom: 8px;
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

  ::placeholder {
    color: #f9f9f9;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
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
`;

export const LoginLink = styled.p`
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: #686868;
  text-decoration: underline;
`;
