import styled from "styled-components";

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &::before {
      content: "";
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 0.8em;
    }
  }
`;
const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};
const BreadcrumbWrapper = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const Breadcrumbs = () => (
  <BreadcrumbWrapper>
    <Crumb href="/">Home</Crumb>
    <Crumb href="#">Sale</Crumb>
    <Crumb href="#" isCurrentPage={true}>
      Shoes
    </Crumb>
  </BreadcrumbWrapper>
);

export default Breadcrumbs;
