import styled from "styled-components";

const Base = styled.div`
  width: fit-content;
  padding: 8px;
  border-radius: 2px;
  font-family: Raleway;
  font-size: ${14 / 16}rem;
  font-weight: ${p => p.theme.weights.bold};
  color: ${p => p.theme.colors.white};
`;

const Hot = styled(Base)`
  background-color: ${p => p.theme.colors.secondary};
`;

const Sale = styled(Base)`
  background-color: ${p => p.theme.colors.primary};
`;

const getComponent = variant => {
  switch (variant) {
    case "hot":
      return Hot;
    case "sale":
      return Sale;
    default:
      throw new Error(`${variant} was not a proper variant for banner`);
  }
};

const ShoeBanner = ({ variant }) => {
  const Component = getComponent(variant);
  return <Component>Just released!</Component>;
};

export default ShoeBanner;
