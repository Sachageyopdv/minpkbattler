import { useEffect, useState } from "react";
import Pokelist from "./Components/Pokelist";
import Fight from "./Components/Fight";
import styled from "styled-components";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [fightPokeData1, setFightPokeData1] = useState();
  const [fightPokeData2, setFightPokeData2] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=255")
      .then((response) => response.json())
      .then((data) => setPokeData(data.results))
      .catch((error) => console.error("Error fectching data:", error));
  }, []);

  return (
    <>
      <h1>Pokebattler</h1>
      <Pokelist pokeData={pokeData} setPokeFighter={setFightPokeData1} />
      <Pokelist pokeData={pokeData} setPokeFighter={setFightPokeData2} />
      {fightPokeData1 && fightPokeData2 && (
        <Fight poke1={fightPokeData1} poke2={fightPokeData2} />
      )}
    </>
  );
}

export default App;
