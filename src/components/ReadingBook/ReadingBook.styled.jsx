import styled from "@emotion/styled";

export const ReadBox = styled.div`
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
    margin-top: 16px;
    padding: 40px 40px 25px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-family: 'Gilroy';
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 44px;
  }
`;

export const BookBox = styled.div`
  max-width: 146px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 317px;
  }
`;

export const BookIMG = styled.img`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 169px;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 224px;
    height: 340px;
  }
`;
export const BookTitle = styled.h3`
  margin-bottom: 5px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1;
  }
`;

export const BookAuthor = styled.p`
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: center;
  color: #686868;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const SVGWrapper = styled.svg`
  width: 40px;
  height: 40px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 25px;
  }
`;
