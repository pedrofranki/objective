import React, { useEffect, useState } from "react";
import {
  getCharacter,
  getCharacterSeries,
  getCharacterComics,
} from "../../services";
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
    <div>
      <img
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
      />
      {comics.map((comic: any) => (
        <div>
          <img
            src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
          />

          <img
            src={`${comic?.images[0]?.path}.${comic?.images[0]?.extension}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterDetails;
