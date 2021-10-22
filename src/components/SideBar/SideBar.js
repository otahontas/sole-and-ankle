import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 248px;
  margin: 32px;
  margin-top: 0px;
  line-height: 200%;
`;

const CategoryLink = styled.a`
  text-decoration: none;
  color: ${p => (p.current ? p.theme.colors.primary : p.theme.colors.gray900)};
  font-weight: ${p => p.theme.weights.medium};
`;

const categories = [
  "Lifestyle",
  "Jordan",
  "Running",
  "Basketball",
  "Training & Gym",
  "Football",
  "SkateBoarding",
  "American Football",
  "Baseball",
  "Golf",
  "Tennis",
  "Athletics",
  "Walking",
];
const current = "Running";

const SideBar = () => {
  return (
    <Wrapper>
      {categories.map(c => (
        <CategoryLink key={c} current={c === current} href="#">
          {c}
        </CategoryLink>
      ))}
    </Wrapper>
  );
};

export default SideBar;
