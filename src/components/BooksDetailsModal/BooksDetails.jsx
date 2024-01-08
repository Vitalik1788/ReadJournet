import { useDispatch } from 'react-redux';
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

const BooksDetails = ({ bookForModal, isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const { imageUrl, title, author, totalPages, _id } = bookForModal;

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
          <ModalBtn
            onClick={() => { dispatch(addBookFromRecommend(_id)), closeModal() }}
            type="button"
          >
            Add to library
          </ModalBtn>
        </CardBox>
      </StyledModal>
    </div>
  );
};

export default BooksDetails;
