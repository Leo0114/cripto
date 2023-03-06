const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <div className=" text-white flex  mt-8 self-center mx-auto">
      <img
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen cripto"
        className="block w-36 mx-auto "
      />
      <div className=" mx-auto">
        <p className=" text-2xl">
          El precio es de: <span className=" font-bold">{PRICE}</span>
        </p>
        <p className=" text-lg">
          Precio más alto de el día:
          <span className=" font-bold">{HIGHDAY}</span>
        </p>
        <p>
          Precio más bajo del día: <span className=" font-bold">{LOWDAY}</span>
        </p>
        <p>
          Variación ultimas 24 horas:
          <span className=" font-bold">{CHANGEPCT24HOUR}</span>
        </p>
        <p>
          Ultima Actualización: <span className=" font-bold">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
