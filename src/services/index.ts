import axios from "axios";
import getHash, { publicKey, timestamp } from "../utils/getHash";

const BASE_URL = "http://gateway.marvel.com/v1/public";

const apikey = publicKey;
const hash = getHash();

export interface Filter {
  name?: string;
  limit?: number;
  offset?: number;
}

export const getCharactersAsync = ({ name, limit, offset }: Filter) => {
  return axios.get(`${BASE_URL}/characters`, {
    params: { apikey, name, limit, offset, ts: timestamp, hash },
  });
};

export const getCharacter = (idCharacter: string) => {
  return axios.get(`${BASE_URL}/characters/${idCharacter}`, {
    params: {
      apikey,
      ts: 1,
      hash,
    },
  });
};

export const getCharacterSeries = (idCharacter: string) => {
  return axios.get(`${BASE_URL}/characters/${idCharacter}/series`, {
    params: {
      apikey,
      ts: 1,
      hash,
    },
  });
};

export const getCharacterComics = (idCharacter: string) => {
  return axios.get(`${BASE_URL}/characters/${idCharacter}/comics`, {
    params: {
      apikey,
      ts: 1,
      hash,
    },
  });
};



