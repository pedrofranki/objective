import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 4fr);

  background-color: var(--snow);
  box-shadow: 0px 0px 5px #00000033;

  padding: 24px;
  margin-bottom: 8px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    img {
        width: 48px;
        aspect-ratio: 1;
    }
  }

  .character-name {
    font-size: 14px;
    margin: 0;
  }

  .column-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 12px;
    }
  }
`;
