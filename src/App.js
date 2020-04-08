import React from "react";
import useKonamiCode from "./useKonamiCode";

function App() {
  const callback = () => console.log("YEEEEEY");
  const newSequence = ["w", "j"];
  const { sequence, rightSequence } = useKonamiCode(newSequence, callback);

  return (
    <div>
      <h1>Konami code! </h1>

      <img
        alt="konami code: cima cima baixo baixo esquerda direita esquerda direita b a"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Konami_Code.svg"
      />

      <p>
        {sequence.map((key, i) => (
          <b key={i}> {key} </b>
        ))}
      </p>

      {rightSequence && <h1>YEEEEEY!!</h1>}
    </div>
  );
}

export default App;
