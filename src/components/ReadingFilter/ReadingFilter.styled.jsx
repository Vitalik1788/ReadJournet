import styled from '@emotion/styled';
import { Field } from 'formik';

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 20px;
  padding-bottom: 40px;
  background-color: #1f1f1f;
  border-radius: 30px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 84px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 353px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 0;
  }
`;

export const FilterWrapper = styled.div` 
  width: 100%;
  margin-right: 40px;

  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`

export const FilterTitle = styled.h2`
  margin-bottom: 8px;
  padding-left: 14px;
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 14px;
  background-color: #262626;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 16px 14px;
  }
`;

export const StyledLabel = styled.label`
  white-space: nowrap;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  color: #686868;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  margin-left: 10px;
  padding: 0;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  color: #f9f9f9;

  background-color: inherit;
  border: none;
  :hover,
  :focus,
  :active {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FilterBtn = styled.button`
  margin-bottom: 40px;
  padding: 10px 20px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  color: #f9f9f9;
  background-color: inherit;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;

  :hover,
  :focus {
    background-color: #f9f9f9;
    color: #1f1f1f;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    font-size: 16px;
  }
`;
