import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Pagination from "../../components/Pagination";
import CardCharacter from "../../components/CardCharacter";
import { getCharactersAsync } from "../../services";

const CharacterList = () => {
  const [charactersList, setCharacterList] = useState<I.Character[]>();

  useEffect(() => {
    (async function getCharacters() {
      await getCharactersAsync({ limit: 10 })
        .then((resp) => {
          setCharacterList(resp.data.data.results as I.Character[]);
        })
        .catch((e) => {
          throw new Error(e);
        });
    })();
  }, []);

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
        {charactersList?.map((char) => (
          <CardCharacter
            key={char.id}
            name={char.name}
            thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            events={char.events.items}
            series={char.series.items}
          />
        ))}
      </div>
      <Pagination pagesCount={[1, 2, 3, 4, 5]} />
    </S.Container>
  );
};

export default CharacterList;
