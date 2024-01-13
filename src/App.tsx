import "./App.css";

function App() {
  return <h1>Hola Mundo</h1>;
}

export default App;
import { useEffect, useState } from "react";
import "./App.css";

const CAT_RANDOM_FACT_URL = "https://catfact.ninja/fact";

function App() {
  const [frase, setFrase] = useState("Nanitooo");
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();
    // const { signal } = controller;

    console.log("SE INICIA EL RENDERIZADO DESDE EL USE EFFECT");

    const getRandomCatFact = async () => {
      try {
        const response = await fetch(CAT_RANDOM_FACT_URL /*{ signal }*/);
        const data = await response.json();

        console.log("DATA: ", data);

        setCambio((cambio) => !cambio); // esto es para que se vuelva a renderizar el componente

        console.log("SE TERMINA EL RENDERIZADO DESDE EL USE EFFECT", frase); //el valor de frase es el que tenía antes de cambiarlo
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.message);
        }
      }
    };

    getRandomCatFact();

    // return () => {
    //   controller.abort();
    //   console.log("SE LLAMA A LA FUNCIÓN DE LIMPIEZA");
    // };
  }, [frase]);

  console.log("FRASE: ", frase);

  console.log("SE TERMINA EL RENDERIZADO");

  return (
    <>
      {frase && (
        <>
          <p>{cambio ? "Cambio" : frase}</p>
          <button onClick={() => setFrase(() => "Hola Mundooooo")}>
            Cambiar frase
          </button>
        </>
      )}
    </>
  );
}

export default App;

// - Se monta (se renderiza por primera vez) el Componente

// - Se llama al useEffect (porq siempre de renderizarse el componente se llama)

// - Dentro se usa set del estado (se cambia el estado)

// - Se vuelve a renderizar el componente (porq el estado cambió)

// - El useEffect mira q el catFact cambió y vuelve a ejecutar el código dentro del useEffect

// - Dentro se usa set del estado (se cambia el estado)

// - Se vuelve a renderizar el componente (porq el estado cambió)

// - El useEffect mira q el catFact cambió y vuelve a ejecutar el código dentro del useEffect
