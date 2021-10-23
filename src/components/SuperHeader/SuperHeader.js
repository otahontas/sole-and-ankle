import styled from "styled-components";
import { ShoppingBag } from "react-feather";
import SearchInput from "../SearchInput";

const Wrapper = styled.div`
  align-items: center;
  background-color: ${p => p.theme.colors.gray900};
  display: flex;
  font-size: ${14 / 16}rem;
  gap: 24px;
  height: 40px;
  padding: 0 32px;
  width: 100%;
`;

const AdMessage = styled.p`
  color: ${p => p.theme.colors.white};
  margin-right: auto;
`;

const Help = styled.p`
  color: ${p => p.theme.colors.gray300};
`;
const ShoppingBagIconWrapper = styled(ShoppingBag)`
  color: ${p => p.theme.colors.gray300};
  height: 24px;
  stroke-width: 1px;
  width: 24px;
`;

const SuperHeader = () => (
  <Wrapper>
    <AdMessage>Free shipping on domestic orders over $75!</AdMessage>
    <SearchInput />
    <Help>Help</Help>
    <ShoppingBagIconWrapper />
  </Wrapper>
);

export default SuperHeader;
