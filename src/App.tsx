import "./App.css";
import Hermano from "./components/Hermano";
import { Hijo } from "./components/Hijo";
import { countContext } from "./context/countContext";

function App() {
  const objetoDesdeApp = {
    count: 2689,
  };

  return (
    <>
      <countContext.Provider value={objetoDesdeApp}>
        <Hijo></Hijo>
      </countContext.Provider>
      <Hermano></Hermano>
    </>
  );
}

export default App;
