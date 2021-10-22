import styled from "styled-components";
import SuperHeader from "../SuperHeader";

const MainHeader = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  border-bottom: 1px solid ${p => p.theme.colors.gray300};
  align-items: center;
  padding: 18px 32px;
`;

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0px 48px;
`;

const LinkList = styled.ul`
  display: flex;
  gap: 48px;
`;

const LinkBase = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Brand = styled(LinkBase)`
  flex: 1;
  font-size: ${24 / 16}rem;
  color: ${p => p.theme.colors.gray900};
  font-weight: ${p => p.theme.weights.bold};
  max-width: 248px;
`;

const NavLink = styled(LinkBase)`
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  color: ${p => (p.current ? p.theme.colors.secondary : p.theme.colors.gray900)};
  font-weight: ${p => p.theme.weights.medium};
`;

const links = ["Sale", "New Releases", "Men", "Women", "Kids", "Collections"];
const currentPage = "Sale";

const Nav = () => (
  <NavWrapper>
    <LinkList>
      {links.map(link => (
        <NavLink current={link === currentPage} key={link} href="#">
          {link}
        </NavLink>
      ))}
    </LinkList>
  </NavWrapper>
);

const Header = () => (
  <>
    <SuperHeader />
    <MainHeader>
      <Brand href="/">Sole&Ankle</Brand>
      <Nav />
    </MainHeader>
  </>
);

export default Header;
