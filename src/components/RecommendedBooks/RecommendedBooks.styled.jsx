import styled from "@emotion/styled";

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
`;