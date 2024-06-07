import { useEffect } from "react";
import { CryptoSearchForm } from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos );
  //const fetchData = useCryptoStore((state) => state.fetchData );

  useEffect(() => {fetchCryptos()}, [])
  //useEffect(() => {fetchData()}, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>

    </>
  )
}

export default App
