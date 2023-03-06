import { useState } from "react";

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <label className=" text-white font-bold text-2xl block my-4 mx-0">
        {label}
      </label>
      <select
        className=" w-full rounded-xl p-4 text-xl mb-5"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
