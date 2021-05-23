import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import * as S from "./styles";
import Pagination from "../../components/Pagination";
import CardCharacter from "../../components/CardCharacter";
import { getCharactersAsync, Filter } from "../../services";

const CharacterList = () => {
  const [charactersList, setCharacterList] = useState<I.Character[]>();
  const [searchField, setSearchField] = useState("");
  const [totalItems, setTotalItems] = useState(1);
  const [filters, setFilters] = useState<Filter>({ limit: 10, offset: 1 });
  const [page, setPage] = useState(1);

  const history = useHistory()

  useEffect(() => {
    getCharacters();
  }, [filters]);

  async function getCharacters() {
    await getCharactersAsync(filters)
      .then((resp) => {
        console.log(resp, "resp");
        setTotalItems(resp.data.data.total);
        setCharacterList(resp.data.data.results as I.Character[]);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }

  function handleChangePage(pageNumber: number) {
    setPage(pageNumber);
    setFilters((filter) => ({ ...filter, offset: pageNumber }));
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchField(e.target.value);
    setFilters((filter) => ({ ...filter, name: e.target.value }));
  }

  function handleCharacterCardClick(idCaracter: number){
    history.push(`/character/${idCaracter}`)
  }

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
          <input
            placeholder="Search"
            className="search-input"
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="list-container">
        <div className="header-container">
          <span className="header-item">Personagem</span>

          <span className="header-item">Séries</span>

          <span className="header-item">Eventos</span>
        </div>

        {charactersList && charactersList?.map((char) => (
          <CardCharacter
            id={char.id}
            key={char.id}
            name={char.name}
            thumbnail={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            events={char.events.items}
            series={char.series.items}
            onClickCard={handleCharacterCardClick}
          />
        ))}
      </div>

      <Pagination
        handlePageChange={handleChangePage}
        currentPage={page}
        pagesCount={[1, 2, 3, 4, 5]}
        total={50}
        pageSize={10}
      />
    </S.Container>
  );
};

export default CharacterList;
