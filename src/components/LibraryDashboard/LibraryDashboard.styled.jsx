import styled from '@emotion/styled';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 20px;
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
    padding: 32px;
    margin-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 353px;
    padding: 20px;

    margin-left: 0;
    margin-right: 16px;
  }
`;

export const FilterBox = styled.div`
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const FilterTitle = styled.h3`
  padding-left: 14px;
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  background-color: #262626;
  border-radius: 12px;
  padding: 14px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const InputLabel = styled.label`
  width: fit-content;
  white-space: nowrap;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #686868;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const InputField = styled(Field)`
  padding-left: 10px;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  background-color: inherit;
  border: none;
  outline: none;

  ::placeholder {
    color: #f9f9f9;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const FiltersBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  background-color: #141414;
  color: #f9f9f9;

  :hover,
  :focus {
    color: #1f1f1f;
    background-color: #f9f9f9;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 28px;
  }
`;

export const RecommendedBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #262626;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 313px;
    height: fit-content;
    padding: 26px 20px;
  }
`;

export const RecommendedTitle = styled.h2`
  margin-bottom: 14px;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #e3e3e3;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  margin-top: -20px;
  margin-left: -20px;
  margin-bottom: 11px;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
`;

export const CardItem = styled.li`
  flex-basis: calc(100% / 3 - 20px);
  margin-top: 20px;
  margin-left: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 107px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const BookTitle = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #e3e3e3;
  margin-bottom: 2px;
`;

export const BookAuthor = styled.p`
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #686868;
`;

export const LinkHome = styled(NavLink)`
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #686868;
  border-bottom: 1px solid #686868;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SVGArrow = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
