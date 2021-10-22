import { useState } from "react";
import styled from "styled-components";
import Select from "../Select";
import Breadcrumbs from "../Breadcrumbs";

const Wrapper = styled.div`
  display: flex;
  padding: 32px;
  margin-top: 32px;
  align-items: center;
`;

const BreadcrumbWrapper = styled.div`
  width: 248px;
  margin-right: 32px;
  color: ${p => p.theme.colors.gray700};
`;

const OtherContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const CategoryName = styled.h1`
  font-size: ${24 / 16}rem;
  color: ${p => p.theme.colors.gray900};
  font-weight: ${p => p.theme.colors.medium};
  display: block;
`;

const InfoBar = () => {
  const [selectValue, setSelectValue] = useState("newest");

  return (
    <Wrapper>
      <BreadcrumbWrapper>
        <Breadcrumbs />
      </BreadcrumbWrapper>
      <OtherContent>
        <CategoryName>Running</CategoryName>
        <Select
          label="Sort"
          value={selectValue}
          onChange={event => setSelectValue(event.target.value)}
        >
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
          <option value="curated">Curated</option>
        </Select>
      </OtherContent>
    </Wrapper>
  );
};
export default InfoBar;
