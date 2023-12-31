import styled from '@emotion/styled';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

const burgermenu = HiOutlineMenuAlt3;
const closeCross = IoMdClose;
const link = NavLink;
const modal = Modal;

export const FormBox = styled.div`
  background-color: #1f1f1f;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoText = styled.p`
  font-family: 'Gilroy';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const LinkItem = styled.li``;

export const LinkStyled = styled(link)`
  padding-bottom: 8px;
  font-family: 'Gilroy';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #4f92f7;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavUserText = styled.p`
  font-family: 'Gilroy';
  font-size: 16px;
  font-weight: 700;
  color: #f9f9f9;
`;

export const UserName = styled.li`
  font-family: 'Gilroy';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.13;
  letter-spacing: -0.02em;
  color: #f9f9f9;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const MobileMenu = styled(burgermenu)`
  width: 35px;
  height: 35px;
  color: #f9f9f9;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoutBtn = styled.button`
  font-family: 'Gilroy';
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #f9f9f9;
  padding: 12px 28px 12px 28px;
  background-color: rgba(31, 31, 31, 1);
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;

  :hover,
  :focus {
    background-color: #f9f9f9;
    color: #1f1f1f;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledModal = styled(modal)`
  position: relative;
  height: 100%;
  width: 200px;
  margin-left: auto;
  background-color: #262626;
  outline: none;
`;

export const CloseCross = styled(closeCross)`
  position: absolute;
  top: 34px;
  right: 40px;
  width: 28px;
  height: 28px;
  color: #f9f9f9;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 40px;
  padding-top: 200px;
  
`;

export const BurgerMenuItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BurgerMenuLink = styled(link)`
  padding-bottom: 4px;
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #686868;

  &.active {
    color: #f9f9f9;
    border-bottom: 3px solid #4f92f7;
  }
`;

export const BurgerMenuBtn = styled.button`
  font-family: 'Gilroy';
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  color: #f9f9f9;
  background-color: #262626;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;

  :hover,
  :focus {
    color: #1f1f1f;
    background-color: #f9f9f9;
  }
`;
