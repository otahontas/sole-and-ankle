import styled from "styled-components";

const Testing = styled.p`
  color: ${p => p.theme.colors.primary};
`;

const App = () => {
  return <Testing>Writings here</Testing>;
};

export default App;
