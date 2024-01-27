import styled from '@emotion/styled';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 335px;
  padding: 40px 20px;
  background-color: #262626;
  border-radius: 12px;
  border: 1px solid rgba(104, 104, 104, 0.2);
  outline: none;

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;

export const CloseCross = styled(IoMdClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  color: #f9f9f9;
  cursor: pointer;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalImage = styled.img`
  width: 140px;
  height: 213px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 233px;
  }
`;

export const Title = styled.h2`
  margin-top: 16px;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Author = styled.p`
  margin-top: 2px;
  font-family: 'Gilroy';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #686868;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Pages = styled.p`
  margin-top: 4px;
  margin-bottom: 20px;
  font-family: 'Gilroy';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const ModalBtn = styled.button`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #f9f9f9;
  background-color: inherit;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 24px;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 14px 28px;
  }

  :hover,
  :focus {
    background-color: #f9f9f9;
    color: #1f1f1f;
  }
`;
