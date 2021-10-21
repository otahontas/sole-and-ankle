import styled from "styled-components";

const Base = styled.div`
  border-radius: 2px;
  color: ${p => p.theme.colors.white};
  font-size: ${14 / 16}rem;
  font-weight: ${p => p.theme.weights.bold};
  padding: 8px;
  width: fit-content;
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
