import { CloseCross, ModalIMG, StyledModal, Text, Title } from "./AddedBook.styled";
import ok from '../../assets/images/okey_mobile.png';



const AddedBook = ({ isModalOpen, closeSuccessModal }) => {
  return (
    <>
      <div>
        <StyledModal
          isOpen={isModalOpen}
          onRequestClose={closeSuccessModal}
          ariaHideApp={false}
          contentLabel="Book details modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(20, 20, 20, 0.6)',
            },
          }}
        >
          <CloseCross onClick={() => closeSuccessModal()} />
          <div>
            <ModalIMG src={ok} alt="added is success" />
            <Title>Good job</Title>
            <Text>
              Your book is now in{' '}
              <span style={{ color: '#F9F9F9' }}>the library!</span> The joy
              knows no bounds and now you can start your training
            </Text>
          </div>
        </StyledModal>
      </div>
    </>
  );
};

export default AddedBook;
