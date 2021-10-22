import styled from "styled-components";

const Wrapper = styled.main`
  padding: 32px;
  margin-top: 32px;
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
