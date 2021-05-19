import React from "react";
import * as S from "./styles";
import Pagination from "../../components/Pagination";

const CharacterList = () => {
  return (
    <S.Container>
      <div className="title-container">
        <h1>Busca de personagens</h1>
        <h3>Nome de personagem</h3>
        <div className="input-container">
          <span
            className="iconify"
            data-icon="ant-design:search-outlined"
            data-inline="false"
          ></span>{" "}
          <input placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="list-container">
        <div className="header-container">
          <span className="header-item">Personagem</span>
          <span className="header-item">Séries</span>
          <span className="header-item">Eventos</span>
        </div>
        <div className="character-list">
          <div className="character-card">
            <div>
              <img src="https://picsum.photos/48" />
              <h6 className="character-name">Amora</h6>
            </div>
            <ul className="events-list">
              <li>Iron man</li>
              <li>Old Man Hawkeye</li>
              <li>Fantastic Four</li>
            </ul>
            <ul className="events-list">
              <li>Avx</li>
              <li>Demon in the Bottle</li>
              <li>Dysnasty</li>
            </ul>
          </div>
        </div>
      </div>
      <Pagination pagesCount={[1, 2, 3, 4, 5]} />
    </S.Container>
  );
};

export default CharacterList;
