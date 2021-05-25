import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .list-container {
    width: var(--container-width);

    @media (max-width: 650px) {
      width: var(--mobile-width);
    }

    .header-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 4fr);
      margin-bottom: 8px;
      padding: 0 24px;

      @media (max-width: 650px) {
        padding: 0 80px;
        & :not(:first-child) {
          display: none;
        }
      }

      .header-item {
        color: var(--smoke);
        font-size: 12px;
      }
    }
  }
`;

export const Header = styled.div`
  width: var(--container-width);
  margin-bottom: 50px;

  @media (max-width: 650px) {
    text-align: center;
    width: var(--mobile-width);
  }

  h1 {
    @media (max-width: 650px) {
      font-size: 24px;
    }

    font-size: 32px/30px;
    margin-bottom: 16px;
  }
  h3 {
    @media (max-width: 650px) {
      font-size: 14px;
    }

    font-size: 16px;
    margin: 0 0 8px;
  }

  .input-container {
    position: relative;
    display: inline-block;

    @media (max-width: 650px) {
      width: 100%;
    }

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

      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }
`;
