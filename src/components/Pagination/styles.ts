import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 26px auto 0;
  padding: 26px;
  background-color: #f5f5f5;
  & > svg {
    color: var(--smoke);
  }
`;

export const PageNumber = styled.a<{ active: boolean }>`
  color: ${({active})=> active ? 'var(--snow)': 'var(dark-smoke)'};
  background-color: ${({ active }) =>
    active ? "var(--dark-blue)" : "var(--snow)"};
  border: 1px solid var(--dark-snow);
  margin: 0 8px;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-blue);
    color: var(--snow);
    opacity: 0.8;
  }
`;
