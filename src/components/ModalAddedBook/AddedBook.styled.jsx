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
  padding: 60px 46px;
  background-color: rgba(31, 31, 31, 1);
  border-radius: 12px;
  border: 1px solid rgba(104, 104, 104, 0.2);
  outline: none;

  @media screen and (min-width: 768px) {
    max-width: 342px;
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

export const ModalIMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 68px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: #686868;
`;


