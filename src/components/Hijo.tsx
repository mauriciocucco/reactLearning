export const Hijo = ({ frase, setFrase }) => {
  console.log("Hijo renderizado con: ", frase);
  return (
    <div>
      <h1>{frase}</h1>
      <br />
      <button onClick={() => setFrase("Romancito")}>Setear</button>
    </div>
  );
};
