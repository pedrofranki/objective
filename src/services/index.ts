import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public";

const apikey = process.env.REACT_APP_PUBLIC;
const hash = process.env.REACT_APP_API_KEY
export const getCharactersAsync = ({ name, limit, offset}: {
  name?: string;
  limit?: number;
  offset?: number;
}) => {
  return axios.get(`${BASE_URL}/characters`, {
    params: { apikey, name, limit, offset, ts: 1, hash },
  });
};
