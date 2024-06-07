import { useMemo } from "react";
import { useCryptoStore } from "../store"
import { Spinner } from "./Spinner";

export const CryptoPriceDisplay = () => {

  const result = useCryptoStore((state) => state.result);
  const load = useCryptoStore((state) => state.load);
  //const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);
  const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

  return (
    <div className="result-wrapper">
      {load ? <Spinner /> : hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Cryptomoneda" />
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
              <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
              <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
              <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
