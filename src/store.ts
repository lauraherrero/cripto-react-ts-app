import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoData, Cryptocurrency, Pair } from "./types";
import { getCryptos, getCurrentPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoData;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoData,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },

    fetchData: async (pair) => {
      const result = await getCurrentPrice(pair);
      set(() => ({
        result,
      }));
    }
  }))
);
