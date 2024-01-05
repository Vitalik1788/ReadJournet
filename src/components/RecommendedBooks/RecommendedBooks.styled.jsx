import styled from "@emotion/styled";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const BooksBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 40px 20px;
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
  }

  @media screen and (min-width: 1280px) {
    width: 847px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`

export const RecTitle = styled.h2`
  font-family: 'Gilroy';
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const BtnBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(249, 249, 249, 0.2);
`;

export const LeftArrow = styled(FiChevronLeft)`
  width: 16px;
  height: 16px;
  color: #f9f9f9;
`;

export const RightArrow = styled(FiChevronRight)`
  width: 16px;
  height: 16px;
  color: #f9f9f9;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-top: -20px;

  @media screen and (min-width: 768px) {
    margin-left: -25px;
    margin-top: -25px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: -20px;
    margin-top: -27px;
  }
`;

export const CardItem = styled.li`
  flex-basis: calc(100% / 2 - 20px);
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 4 - 25px);
    margin-left: 25px;
    margin-top: 25px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc(100% / 5 - 20px);
    margin-left: 20px;
    margin-top: 27px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 8px;
`

export const CardTitle = styled.h2`
  margin-top: 8px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const CardAuthor = styled.p`
  margin-top: 2px;
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #686868;
`;