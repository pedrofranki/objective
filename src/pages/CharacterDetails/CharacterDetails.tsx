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
      <div className="header">
        <img
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          alt="a"
        />

        <h1 className="title"></h1>
        <p className="description"></p>
      </div>
      <div className="list-container">
        {comics?.map((comic: any) => (
          <div>
            <img
              src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              alt="a"
            />
            <h5 className="card-title"></h5>
            <p className="card-description"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;
