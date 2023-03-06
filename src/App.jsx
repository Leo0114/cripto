import { useState, useEffect } from "react";
import ImagenCrypto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        const { moneda, criptoMoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <div className="container mx-auto flex flex-wrap">
      <div className="block mt-24 flex-col md:w-1/2 md:max-w-full">
        <img
          src={ImagenCrypto}
          className="mx-auto w-full max-w-md m-0 "
          alt="Imagen Criptomonedas"
        />
      </div>

      <div className=" flex-col md:w-1/2 w-full ">
        <h1 className=" text-white text-4xl font-bold text-center mt-20 mb-12 ">
          Cotiza Criptomonedas al <br />
          <span className=" border-b-8 border-blue-500">instante</span>
        </h1>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </div>
  );
}

export default App;
