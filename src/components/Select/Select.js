import React from "react";
import styled from "styled-components";
import { ChevronDown } from "react-feather";

const getDisplayedValue = (value, children) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(child => child.props.value === value);

  return selectedChild.props.children;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SelectionWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: gray;
  background-color: ${p => p.theme.colors.gray100};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px solid Highlight; /* Firefox default */
    outline: 5px auto -webkit-focus-ring-color; /* Chrome & safari defaults */
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`;

const ChevronIconWrapper = styled(ChevronDown)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const Label = styled.p`
  color: ${p => p.theme.colors.gray700};
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectionWrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalBit>
          {displayedValue}
          <ChevronIconWrapper />
        </PresentationalBit>
      </SelectionWrapper>
    </Wrapper>
  );
};

export default Select;
