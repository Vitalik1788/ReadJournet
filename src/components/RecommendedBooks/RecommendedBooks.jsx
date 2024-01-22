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
import { useLayoutEffect, useState } from 'react';
import { getRecommendBooks, getUserBooks } from '../../redux/books/booksOperation';
import {
  selectIsLoading,
  selectTotalPages,
} from '../../redux/books/booksSelectors';
import useSize from '../../hooks/getWindowSize';
import BooksDetails from '../BooksDetailsModal/BooksDetails';
import Spinner from '../Spinner/Spinner';
import { selectVisibleRecommend } from '../../redux/filters/filtersSelectors';

const RecommendedBooks = () => {
  const [page, setPage] = useState(1);
  const [bookForModal, setBookForModal] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const visibleBooks = useSelector(selectVisibleRecommend);
  const windowsize = useSize();
    
  useLayoutEffect(() => {
    dispatch(getRecommendBooks({ windowsize, page }));
    dispatch(getUserBooks());
  }, [dispatch, windowsize, page]);

  function modalOpen(book) {
    setIsOpen(true);
    setBookForModal(book);
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
          {isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {visibleBooks &&
                visibleBooks.map((book) => {
                  return (
                    <CardItem key={book._id}>
                      <CardImg
                        src={book.imageUrl}
                        alt="Book cover"
                        onClick={() => modalOpen(book)}
                      />
                      <CardTitle>{book.title}</CardTitle>
                      <CardAuthor>{book.author}</CardAuthor>
                    </CardItem>
                  );
                })}
            </CardList>
          )}
        </div>
      </BooksBox>
      <BooksDetails
        bookForModal={bookForModal}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default RecommendedBooks;
