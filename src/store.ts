import { create } from "zustand";
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema";
import { Cryptocurrency } from "./types";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  fetchCryptos: () => Promise<void>;
};

export const getCryptos = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const resp = await fetch(url);
  const data = await resp.json();
  const response = await data.Data;

  const result = CryptoCurrenciesResponseSchema.safeParse(response);

  if (result.success) {
    return result.data;
  }
};

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptocurrencies: [],
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos();
    set(() => ({
      cryptocurrencies
    }))
  },
}));
