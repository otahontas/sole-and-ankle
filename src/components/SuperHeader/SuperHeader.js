import styled from "styled-components";
import { ShoppingBag } from "react-feather";
import SearchInput from "../SearchInput";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  font-size: ${14 / 16}rem;
  background-color: ${p => p.theme.colors.gray900};
  align-items: center;
`;

const AdMessage = styled.p`
  color: ${p => p.theme.colors.white};
`;

const RightSideWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Help = styled.p`
  color: ${p => p.theme.colors.gray300};
`;
const ShoppingBagIconWrapper = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
  stroke-width: 1px;
  color: ${p => p.theme.colors.gray300};
`;

const SuperHeader = () => (
  <Wrapper>
    <AdMessage>Free shipping on domestic orders over $75!</AdMessage>
    <RightSideWrapper>
      <SearchInput />
      <Help>Help</Help>
      <ShoppingBagIconWrapper />
    </RightSideWrapper>
  </Wrapper>
);

export default SuperHeader;
