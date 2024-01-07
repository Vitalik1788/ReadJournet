import { useDispatch, useSelector } from 'react-redux';
import {
  BooksBox,
  BtnBox,
  CardAuthor,
  CardImg,
  CardItem,
  CardList,
  CardTitle,
  LeftArrow,
  RecTitle,
  RightArrow,
  Wrapper,
} from './RecommendedBooks.styled';
import { useEffect, useState } from 'react';
import { getRecommendBooks } from '../../redux/books/booksOperation';
import {
  selectBooks,
  selectTotalPages,
} from '../../redux/books/booksSelectors';
import useSize from '../../hooks/getWindowSize';
import BooksDetails from '../BooksDetailsModal/BooksDetails';

const RecommendedBooks = () => {
  const [page, setPage] = useState(1);
  const [bookForModal, setBookForModal] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const totalPages = useSelector(selectTotalPages);
  const windowsize = useSize();

  useEffect(() => {
    dispatch(getRecommendBooks({ windowsize, page }));
  }, [dispatch, windowsize, page]);

  function modalOpen() {
    setIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowY = 'unset';
  }

  return (
    <>
      <BooksBox>
        <Wrapper>
          <RecTitle>Recommended</RecTitle>
          <ul style={{ display: 'flex', gap: '8px' }}>
            <li>
              <BtnBox disabled={page === 1} onClick={() => setPage(page - 1)}>
                <LeftArrow
                  style={page === 1 ? { color: 'gray' } : { color: 'white' }}
                />
              </BtnBox>
            </li>
            <li>
              <BtnBox
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                <RightArrow
                  style={
                    page === totalPages ? { color: 'gray' } : { color: 'white' }
                  }
                />
              </BtnBox>
            </li>
          </ul>
        </Wrapper>

        <div>
          <CardList>
            {books &&
              books.map((book) => {
                return (
                  <CardItem key={book._id}>
                    <CardImg
                      src={book.imageUrl}
                      alt="Book cover"
                      onClick={() => {setBookForModal(book), modalOpen()}}
                    />
                    <CardTitle>{book.title}</CardTitle>
                    <CardAuthor>{book.author}</CardAuthor>
                  </CardItem>
                );
              })}
          </CardList>
        </div>
      </BooksBox>

      <BooksDetails bookForModal={bookForModal} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default RecommendedBooks;
