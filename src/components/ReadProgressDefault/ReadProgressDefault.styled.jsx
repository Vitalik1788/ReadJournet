import styled from "@emotion/styled";

export const ProgressBox = styled.div`
  width: 100%;

`

export const ProgressTitle = styled.h2`
  margin-bottom: 14px;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ProgText = styled.p`
  margin-bottom: 20px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #686868;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const StarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #262626;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;


export const StarIMGMobile = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const StarIMGTablet = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;