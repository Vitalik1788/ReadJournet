import styled from '@emotion/styled';
import { IoChevronDown } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 40px 20px 100px;
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
    padding: 40px 40px 160px;
    margin-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 100%;
    padding: 40px 40px 160px;

    margin-left: 0;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleLibrary = styled.h2`
  font-family: 'Gilroy';
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  border: 1px solid #3e3e3e;
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 14px;
  }
`;

export const TitleFilter = styled.p`
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  margin-right: 28px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-right: 53px;
  }
`;

export const Icon = styled(IoChevronDown)`
  width: 16px;
  height: 16px;
  color: #f9f9f9;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 197px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    max-width: 274px;
    margin-top: 64px;
  }
`;

export const BookBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #262626;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;
    margin-bottom: 20px;
  }
`;

export const IconBook = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const Text = styled.p`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f9f9f9;
`;

export const BooksList = styled.ul`
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
    margin-top: -25px;
  }
`;

export const BookItem = styled.li`
  flex-basis: calc(100% / 2 - 20px);
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 4 - 25px);
    margin-left: 25px;
    margin-top: 25px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc(100% / 5 - 25px);
    margin-left: 20px;
    margin-top: 25px;
  }
`;

export const LibraryCardImg = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CardContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BookTitle = styled.p`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  margin-bottom: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const BookAuthor = styled.p`
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #686868;
`;

export const TrashBox = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  border: 1px solid rgba(232, 80, 80, 0.2);
  background-color: rgba(232, 80, 80, 0.1);
`;

export const Trash = styled(FaRegTrashAlt)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  color: #e85050;
`;
