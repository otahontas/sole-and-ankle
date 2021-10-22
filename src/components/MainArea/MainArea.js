import styled from "styled-components";
import apiClient from "../../utils/apiClient";
import ShoeCard from "../ShoeCard";

const Wrapper = styled.section`
  flex: 1;
  margin-right: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShoeCardWrapper = styled(ShoeCard)`
  flex: 1 1 calc(90% / 3 - 32px);
`;

const MainArea = () => {
  const shoes = apiClient.get;
  return (
    <Wrapper>
      {shoes.map(shoe => (
        <ShoeCardWrapper key={shoe.name} shoe={shoe} />
      ))}
    </Wrapper>
  );
};

export default MainArea;
