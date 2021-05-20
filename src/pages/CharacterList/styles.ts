import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-container {
    width: var(--container-width);
    margin-bottom: 50px;
    h1 {
      font-size: 32px/30px;
      margin-bottom: 16px;
    }
    h3 {
      font-size: 16px;
      margin: 0 0 8px;
    }

    .input-container {
      position: relative;
      display: inline-block;

      & > svg {
        position: absolute;
        right: 16px;
        top: 25%;
        transform: translateY(-100%);
        color: var(--smoke);
        font-size: 18px;
      }

      .search-input {
        border: none;
        padding: 8px 16px;
        font-style: italic;
        width: 295px;
      }
    }
  }

  .list-container {
    width: var(--container-width);

    .header-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 4fr);
      margin-bottom: 8px;
      padding: 0 24px;
      .header-item {
        color: var(--smoke);
        font-size: 12px;
      }
    }
  }

  .character-list {
    
  }
`;
