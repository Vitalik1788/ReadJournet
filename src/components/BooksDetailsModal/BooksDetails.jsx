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
import { addBookFromRecommend } from '../../redux/books/booksOperation';
import { selectUserBooks } from '../../redux/books/booksSelectors';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BooksDetails = ({ bookForModal, isOpen, closeModal }) => {
  const [isInFavorite, setIsInFavorite] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const books = useSelector(selectUserBooks);
  const { imageUrl, title, author, totalPages, _id } = bookForModal;

  useLayoutEffect(() => {
    if (bookForModal && books.includes(bookForModal)) {
      setIsInFavorite(true);
    }
  }, [bookForModal, books]);

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
            <ModalBtn onClick={() => navigation("/reading")} type="button">Start reading</ModalBtn>
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
