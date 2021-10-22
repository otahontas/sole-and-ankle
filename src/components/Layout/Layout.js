import styled from "styled-components";

const Wrapper = styled.main`
  padding: 32px 0 0;
  margin-top: 32px;
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
