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
  color: #f9f9f9;
`;

export const TitleSpan = styled.span`
  color: rgba(227, 227, 227, 0.5);
`;

export const InputsBox = styled.div`
  position: relative;
`

export const Label = styled.label`
  position: absolute;
  top: 17px;
  left: 14px;
  color: #686868;
  font-size: 12px;

`;

export const StyledField = styled(field)`
  width: 100%;
  margin-bottom: 8px;
  padding: 14px;
  background-color: #262626;
  border: none;
  border-radius: 12px;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;

`

export const Btn = styled.button`
  background-color: #f9f9f9;
  margin-top: 12px;
  padding: 12px 29px 12px 29px;
  border: none;
  border-radius: 30px;
  color: #1f1f1f;
  font-size: 14px;
`;

export const LoginLink = styled.p`
font-size: 12px;
  color: #686868;
  text-decoration: underline;
`;
