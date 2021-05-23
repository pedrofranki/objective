import React from "react";
import * as S from "./styles";

export interface Props {
  id: number;
  name: string;
  thumbnail: string;
  onClickCard: (idCharacter: number) => void;
  series: { name: string }[];
  events: { name: string }[];
}

const CardCharacter = ({ name, thumbnail, series, events, onClickCard, id }: Props) => {
  const getSeriesList = () =>
    series.length > 3
      ? series
          .slice(0, 3)
          .map((serie, index) => <li key={index}>{serie.name}</li>)
      : series.map((serie, index) => <li key={index}>{serie.name}</li>);

  const getEventList = () =>
    events.length > 3
      ? events
          .slice(0, 3)
          .map((event, index) => <li key={index}>{event.name}</li>)
      : events.map((event, index) => <li key={index}>{event.name}</li>);

  return (
    <S.Container onClick={() => onClickCard(id)}>
      <div>
        <img src={thumbnail} alt="character-image" />
        <h6 className="character-name">{name}</h6>
      </div>
      <ul className="column-list">{getSeriesList()}</ul>
      <ul className="column-list">{getEventList()}</ul>
    </S.Container>
  );
};

export default CardCharacter;
