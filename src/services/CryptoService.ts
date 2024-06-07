import { CryptoCurrenciesResponseSchema, CryptoDataSchema } from "../schema/crypto-schema";
import { Pair } from "../types";

export const getCryptos = async () => {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const resp = await fetch(url);
  const data = await resp.json();
  const response = await data.Data;

  const result = CryptoCurrenciesResponseSchema.safeParse(response);

  if (result.success) {
    return result.data;
  }
};

export const getCurrentPrice = async (pair: Pair) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.crypto}&tsyms=${pair.currency}`;

  const resp = await fetch(url);
  const data = await resp.json();
  const response = await data.DISPLAY[pair.crypto][pair.currency];
  
  const result = CryptoDataSchema.safeParse(response);
  
  if(result.success) {
    return result.data
  }
  
}