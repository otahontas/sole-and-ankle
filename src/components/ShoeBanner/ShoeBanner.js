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

const getComponentAndContent = variant => {
  switch (variant) {
    case "hot":
      return [Hot, "Just Released!"];
    case "sale":
      return [Sale, "Sale"];
    default:
      throw new Error(`${variant} was not a proper variant for banner`);
  }
};

const ShoeBanner = ({ variant, className }) => {
  const [Component, text] = getComponentAndContent(variant);
  return <Component className={className}>{text}</Component>;
};

export default ShoeBanner;
