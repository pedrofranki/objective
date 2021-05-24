import md5 from "md5";

export const publicKey = process.env.REACT_APP_PUBLIC_KEY;

export const timestamp = 1;

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

function getHash() {
  if (publicKey && privateKey && timestamp)
    return md5(timestamp + privateKey + publicKey);
  else throw new Error("Chaves não configuradas");
}

export default getHash;
