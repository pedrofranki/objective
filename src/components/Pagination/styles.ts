import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 26px auto 0;

  & > svg {
    color: var(--smoke);
  }
`;

export const PageNumber = styled.span`
  color: var(--dark-smoke);
  margin: 0 8px;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-blue);
    color: var(--snow);
    opacity: 0.75;
  }
`;
