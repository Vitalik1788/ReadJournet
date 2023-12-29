import styled from '@emotion/styled';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

const field = Field;
const link = Link;

export const FiltersBox = styled.div`
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
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
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
`;

export const InputBox = styled.div`
  margin-top: 8px;
  background-color: #262626;
  border-radius: 12px;
  padding: 14px;
`;

export const InputLabel = styled.label`
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #686868;
`;

export const InputField = styled(field)`
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
`;

export const WorkoutBox = styled.div`
  padding: 20px;
  background-color: #262626;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    max-width: 313px;
  }
`;

export const WorkoutTitle = styled.h3`
  margin-bottom: 20px;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const WorkoutList = styled.li`
  display: flex;
  gap: 12px;

  :not(:last-child) {
    margin-bottom: 20px;
  }

`

export const WorkoutListPoint = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  background-color: #f9f9f9;
  border-radius: 50%;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;

export const WorkoutItemText = styled.p`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const LibraryLinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const LinkText = styled(link)`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #686868;
  text-decoration: underline;
`;

