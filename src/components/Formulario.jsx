import { useEffect, useState } from "react";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "../components/Error";
import { monedas } from "../data/monedas";

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elige tu Cripto Moneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({ moneda, criptoMoneda });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />
        <input
          type="submit"
          value="Cotizar"
          className=" uppercase rounded-xl text-white font-bold text-2xl cursor-pointer  w-full  p-4 bg-sky-600 hover:bg-sky-700 transition duration-150 ease-out hover:ease-in"
        />
      </form>
    </>
  );
};

export default Formulario;
