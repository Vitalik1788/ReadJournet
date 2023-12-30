import {
  FormBox,
  LinkItem,
  LinkList,
  LinkStyled,
  LogoBox,
  LogoText,
  LogoutBtn,
  MobileMenu,
  NavBox,
  NavItem,
  NavList,
  NavUserText,
  UserName,
} from './UserNav.styled';
import logo from '../../assets/images/iconlogo.png';

const UserNav = () => {
  return (
    <FormBox>
      <NavBox>
        <LogoBox>
          <img src={logo} alt="logo icon" />
          <LogoText>READ JOURNEY</LogoText>
        </LogoBox>
        <LinkList>
          <LinkItem>
            <LinkStyled to='/recommended'>Home</LinkStyled>
          </LinkItem>
          <LinkItem>
            <LinkStyled to='/library'>My library</LinkStyled>
          </LinkItem>
        </LinkList>
        <NavList>
          <NavItem>
            <NavUserText>I</NavUserText>
          </NavItem>
          <UserName>Ilona Ratushniak</UserName>
          <li>
            <MobileMenu />
          </li>
          <li>
            <LogoutBtn>Log out</LogoutBtn>
          </li>
        </NavList>
      </NavBox>
    </FormBox>
  );
};

export default UserNav;
