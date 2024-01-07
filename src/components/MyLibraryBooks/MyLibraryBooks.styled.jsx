import styled from '@emotion/styled';
import { IoChevronDown } from 'react-icons/io5';

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
`;

export const MenuBox = styled.div`
  margin-bottom: 63px;
  display: flex;
  border: 1px solid #3e3e3e;
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
`;

export const TitleFilter = styled.p`
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  margin-right: 28px;
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
`;

export const IconBook = styled.img`
  width: 50px;
  height: 50px;
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

export const LibraryCardImg = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`
