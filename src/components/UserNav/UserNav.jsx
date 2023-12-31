import {
  BurgerMenuBtn,
  BurgerMenuItem,
  BurgerMenuLink,
  CloseCross,
  FormBox,
  LinkItem,
  LinkList,
  LinkStyled,
  LogoBox,
  LogoText,
  LogoutBtn,
  MenuBox,
  MobileMenu,
  NavBox,
  NavItem,
  NavList,
  NavUserText,
  StyledModal,
  UserName,
} from './UserNav.styled';
import logo from '../../assets/images/iconlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { selectUser } from '../../redux/auth/authSelector';
import { useState } from 'react';

const UserNav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userFirstLetter = user.slice(0, 1);

  function openModal() {
    setModalIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setModalIsOpen(false);
    document.body.style.overflowY = 'unset';
  }

  return (
    <>
      <FormBox>
        <NavBox>
          <LogoBox>
            <img src={logo} alt="logo icon" />
            <LogoText>READ JOURNEY</LogoText>
          </LogoBox>
          <LinkList>
            <LinkItem>
              <LinkStyled to="/recommended">Home</LinkStyled>
            </LinkItem>
            <LinkItem>
              <LinkStyled to="/library">My library</LinkStyled>
            </LinkItem>
          </LinkList>
          <NavList>
            <NavItem>
              <NavUserText>{userFirstLetter}</NavUserText>
            </NavItem>
            <UserName>{user}</UserName>
            <li>
              <MobileMenu onClick={() => openModal()} />
            </li>
            <li>
              <LogoutBtn onClick={() => dispatch(logout())}>Log out</LogoutBtn>
            </li>
          </NavList>
        </NavBox>
      </FormBox>

      <StyledModal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel="Burger Menu"
        style={{
          overlay: {
            backgroundColor: 'rgba(20, 20, 20, 0.6)',
          },
        }}
      >
        <CloseCross onClick={() => closeModal()} />
        <MenuBox>
          <ul>
            <BurgerMenuItem>
              <BurgerMenuLink to="/recommended">Home</BurgerMenuLink>
            </BurgerMenuItem>
            <BurgerMenuItem>
              <BurgerMenuLink to="/library">My library</BurgerMenuLink>
            </BurgerMenuItem>
          </ul>
          <BurgerMenuBtn onClick={()=> dispatch(logout())}>Log out</BurgerMenuBtn>
        </MenuBox>
      </StyledModal>
    </>
  );
};

export default UserNav;
