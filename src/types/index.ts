import { z } from 'zod';
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoDataSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
//export type CryptoData = z.infer<typeof CryptoDataSchema>;