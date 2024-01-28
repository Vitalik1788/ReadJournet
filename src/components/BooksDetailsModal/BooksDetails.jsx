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
import {
  addBookFromRecommend,
  addReadingBook,
} from '../../redux/books/booksOperation';
import { selectError, selectUserBooks } from '../../redux/books/booksSelectors';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddedBook from '../ModalAddedBook/AddedBook';

const BooksDetails = ({ bookForModal, isOpen, closeModal }) => {
  const [isInFavorite, setIsInFavorite] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const books = useSelector(selectUserBooks);
  const addedError = useSelector(selectError);
  const { imageUrl, title, author, totalPages, _id } = bookForModal;

  useLayoutEffect(() => {
    if (bookForModal && books.includes(bookForModal)) {
      setIsInFavorite(true);
    }
  }, [bookForModal, books]);

  function startReading() {
    dispatch(addReadingBook(bookForModal));
    closeModal();
    navigation('/reading');
  }

  function closeToLibrary() {
    dispatch(addBookFromRecommend(_id));
    closeModal();
    if (!addedError) {
      openSuccessModal();
    }
  }

  function openSuccessModal() {
    setSuccessModal(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeSuccessModal() {
    setSuccessModal(false);
    document.body.style.overflowY = 'unset';
  }

  return (
    <>
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
              <ModalBtn onClick={startReading} type="button">
                Start reading
              </ModalBtn>
            ) : (
              <ModalBtn onClick={closeToLibrary} type="button">
                Add to library
              </ModalBtn>
            )}
          </CardBox>
        </StyledModal>
      </div>
      <AddedBook
        isModalOpen={successModal}
        closeSuccessModal={closeSuccessModal}
      />
    </>
  );
};

export default BooksDetails;
