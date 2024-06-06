import { create } from 'zustand';

export const getCryptos = async() => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

  const resp = await fetch( url );
  const data = await resp.json();
  const result = await data.Data

  console.log(result);
  
}

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    console.log('Desde fecth');
    getCryptos();
   
  }
}))