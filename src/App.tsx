import "./App.css";
import Hermano from "./components/Hermano";
import { Hijo } from "./components/Hijo";
import { CountContextProvider } from "./context/countContext";

function App() {
  return (
    <>
      <CountContextProvider>
        <Hijo />
      </CountContextProvider>
      <Hermano />
    </>
  );
}

export default App;
