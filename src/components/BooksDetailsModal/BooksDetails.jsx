import { useDispatch, useSelector } from 'react-redux';
import {
  Author,
  CardBox,
  CloseCross,
  ModalBtn,
  ModalImage,
  Pages,
  StyledModal,
  Title,
} from './BooksDetails.styled';
import { addBookFromRecommend, deleteUserBook } from '../../redux/books/booksOperation';
import { selectUserBooks } from '../../redux/books/booksSelectors';
import { useLayoutEffect, useState } from 'react';

const BooksDetails = ({ bookForModal, isOpen, closeModal }) => {
  const [isInFavorite, setIsInFavorite] = useState(false);
  const dispatch = useDispatch();
  const { imageUrl, title, author, totalPages, _id } = bookForModal;
  const books = useSelector(selectUserBooks);

  useLayoutEffect(() => {
    if (bookForModal && books.includes(bookForModal)) {
      setIsInFavorite(true);
    }
  }, [ bookForModal, books]);

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Book details modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(20, 20, 20, 0.6)',
          },
        }}
      >
        <CloseCross onClick={() => closeModal()} />
        <CardBox>
          <ModalImage src={imageUrl} alt="book cover" />
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Pages>{totalPages} pages</Pages>
          {isInFavorite ? (
            <ModalBtn
              onClick={() => {
                dispatch(deleteUserBook(_id)), closeModal();
              }}
              type="button"
            >
              Remove from library
            </ModalBtn>
          ) : (
            <ModalBtn
              onClick={() => {
                dispatch(addBookFromRecommend(_id)), closeModal();
              }}
              type="button"
            >
              Add to library
            </ModalBtn>
          )}          
        </CardBox>
      </StyledModal>
    </div>
  );
};

export default BooksDetails;
