import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoData, Cryptocurrency, Pair } from "./types";
import { getCryptos, getCurrentPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoData,
  load: boolean,
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {
      IMAGEURL: '',
      PRICE: '',
      HIGHDAY: '',
      LOWDAY: '',
      CHANGEPCT24HOUR: '',
      LASTUPDATE: ''
    },
    load: false,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },

    fetchData: async (pair) => {
      const result = await getCurrentPrice(pair);
      set(() => ({
        load: true,
      }));
      set(() => ({
        result,
        load: false
      }));
    }
  }))
);
