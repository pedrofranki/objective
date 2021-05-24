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

  img {
    width: 200px;
    height: 200px;
    margin-right: 16px;
  }

  & > div {
    h1 {
      margin-bottom: 16px;
    }

    display: flex;
    flex-direction: column;
    width: 60ch;
    line-height: 24px;
  }
`;

export const List = styled.div`
  margin: 16px 0;
  width: var(--container-width);

  display: grid;
  grid-template-columns: repeat(4, 3fr);
  grid-gap: 16px;
`;

export const ComicCard = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  background-color: var(--snow);
  text-align: center;
  box-shadow: 0px 0px 5px #00000033;

  img {
    width: 125px;
    height: 135px;
    margin-right: 16px;
  }

  h5 {
    line-height: 20px;
  }
`;
