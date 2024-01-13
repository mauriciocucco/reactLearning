import { useContext } from "react";
import { countContext } from "../context/countContext";

function Tataranieto() {
  const objetoQueVieneDelContexto = useContext(countContext);

  console.log("Tataranieto: ", objetoQueVieneDelContexto);

  return <h1>{objetoQueVieneDelContexto.count}</h1>;
}

export default Tataranieto;
