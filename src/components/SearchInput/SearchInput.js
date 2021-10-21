import styled from "styled-components";
import { Search } from "react-feather";

const Wrapper = styled.div`
  color: ${p => p.theme.colors.gray300};
  height: 24px;
  width: 150px;
  position: relative;
  min-width: max-content;

  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;

const InputRow = styled.input`
  background-color: transparent;
  color: inherit;
  border: none;
  border-bottom: 1px solid currentColor;
  height: 100%;
  width: 100%;
  padding-left: 24px;
  font-size: ${14 / 16}rem;
  font-weight: ${p => p.theme.weights.bold};

  &:focus {
    outline-offset: 1px;
  }

  &::placeholder {
    font-weight: ${p => p.theme.weights.normal};
    color: ${p => p.theme.colors.gray500};
  }
`;

const SearchIconWrapper = styled(Search)`
  color: inherit;
  display: block;
  height: 16px;
  width: 16px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 4px;
`;

const SearchInput = () => {
  return (
    <Wrapper>
      <InputRow type="text" placeholder="Search ..." />
      <SearchIconWrapper />
    </Wrapper>
  );
};

export default SearchInput;
