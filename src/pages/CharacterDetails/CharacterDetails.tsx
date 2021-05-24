import React, { useEffect, useState } from "react";
import {
  getCharacter,
  getCharacterSeries,
  getCharacterComics,
} from "../../services";
import * as S from "./styles";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const [character, setCharacter] = useState<any>();
  const [comics, setComics] = useState<any>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async function () {
      await getCharacter(id).then((resp) => {
        setCharacter(resp.data.data.results[0]);
      });

      await getCharacterSeries(id).then((resp) => {
        console.log(resp.data);
      });

      await getCharacterComics(id).then((resp) => {
        setComics(resp.data.data.results);
      });
    })();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <img
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          alt="a"
        />
        <div>
          <h1 className="title">{character?.name}</h1>
          <p className="description">{character?.description}</p>
        </div>
      </S.Header>
      <h2>Comics</h2>
      <S.List>
        {comics?.map((comic: any) => (
          <S.ComicCard>
            <img
              src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              alt="a"
            />
            <h5 className="card-title">{comic?.title}</h5>
          </S.ComicCard>
        ))}
      </S.List>
    </S.Container>
  );
};

export default CharacterDetails;
