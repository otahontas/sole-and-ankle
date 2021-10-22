import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Layout from "./Layout";
import SideBar from "./SideBar";
import MainArea from "./MainArea";
import InfoBar from "./InfoBar";

const MainRowWrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <InfoBar />
        <MainRowWrapper>
          <SideBar />
          <MainArea />
        </MainRowWrapper>
      </Layout>
      <GlobalStyle />
    </>
  );
};

export default App;
