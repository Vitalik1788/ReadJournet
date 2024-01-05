import { useDispatch, useSelector } from "react-redux";
import { BooksBox, BtnBox, CardAuthor, CardImg, CardItem, CardList, CardTitle, LeftArrow, RecTitle, RightArrow, Wrapper } from "./RecommendedBooks.styled";
import { useEffect, useState } from "react";
import { getRecommendBooks } from "../../redux/books/booksOperation";
import { selectBooks } from "../../redux/books/booksSelectors";
import useSize from "../../hooks/getWindowSize";

const RecommendedBooks = () => {
  const [pageLimit, setPageLimit] = useState(2);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  const windowsize = useSize();  
  
  useEffect(() => {
    function limitChange() {
      if (windowsize < 768) {
        setPageLimit(2);
      } else if (windowsize >= 768 && windowsize < 1280) {
        setPageLimit(8);
      } else if (windowsize >= 1280) {
        setPageLimit(10);
      }
    }
    limitChange();
    dispatch(getRecommendBooks({ pageLimit, page }));
  }, [dispatch, pageLimit, page, windowsize]);



  return (
    <BooksBox>
      <Wrapper>
        <RecTitle>Recommended</RecTitle>
        <ul style={{display: "flex", gap: "8px"}}>
          <BtnBox>
            <LeftArrow />
          </BtnBox>
          <BtnBox>
            <RightArrow onClick={()=>setPage(page+1)} />
          </BtnBox>
        </ul>
      </Wrapper>

      <div>
        <CardList>
          {books && books.map((book) => {
            return (
              <CardItem key={book._id}>
                <CardImg src={book.imageUrl} alt="Book cover" />
                <CardTitle>{book.title}</CardTitle>
                <CardAuthor>{book.author}</CardAuthor>
              </CardItem>
            )
          })}
        </CardList>
      </div>
    </BooksBox>
  );
};

export default RecommendedBooks;
