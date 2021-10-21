import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  padding: 8px;
  border-radius: 2px;
  font-family: Raleway;
  font-weight: ${p => p.theme.weights.bold};
`;

const ShoeBanner = () => {
  return <Wrapper>Just released!</Wrapper>;
};

export default ShoeBanner;
