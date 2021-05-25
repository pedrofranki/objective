import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const Header = styled.div`
  width: var(--container-width);
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
    margin: 16px;
  }

  & > div {
    h1 {
      margin-bottom: 16px;
    }

    display: flex;
    flex-direction: column;
    max-width: 60ch;
    line-height: 24px;
  }
`;

export const List = styled.div`
  margin: 16px 0;
  width: var(--container-width);

  display: grid;
  grid-template-columns: repeat(4, 3fr);
  align-items: center;
  grid-gap: 16px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const ComicCard = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--snow);
  text-align: center;
  box-shadow: 0px 0px 5px #00000033;

  img {
    width: 100%;
    margin: 12px 0;
  }

  h5 {
    line-height: 20px;
    font-size: 18px;
  }
`;
