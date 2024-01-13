import { useContext } from "react";
import { countContext } from "../context/countContext";

function Hermano() {
  const objetoQueVieneDelContexto = useContext(countContext);

  console.log("Hermano: ", objetoQueVieneDelContexto);

  return (
    <div>
      <p>Soy hermano</p>
    </div>
  );
}

export default Hermano;
