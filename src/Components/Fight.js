import React from "react";
import { useState, useEffect } from "react";
import StatsDisplay from "./StatsDIsplay";

const Fight = ({ poke1, poke2 }) => {
  const [poke1Stats, setPoke1Stats] = useState(null);
  const [poke2Stats, setPoke2Stats] = useState(null);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    fetch(poke1.url)
      .then((response) => response.json())
      .then((data) => setPoke1Stats(data.stats))
      .catch((error) => console.error("Error fectching data:", error));
  }, [poke1.url]);

  useEffect(() => {
    fetch(poke2.url)
      .then((response) => response.json())
      .then((data) => setPoke2Stats(data.stats))
      .catch((error) => console.error("Error fectching data:", error));
  }, [poke2.url]);

  const startFight = () => {
    return poke1Stats[1].base_stat > poke2Stats[1].base_stat
      ? setWinner(poke1.name)
      : setWinner(poke2.name);
  };

  return (
    <div>
      <StatsDisplay pokeStats={poke1Stats} pokeName={poke1.name} />
      <StatsDisplay pokeStats={poke2Stats} pokeName={poke2.name} />
      <button
        onClick={startFight}
        style={{ padding: "5px", borderRadius: "5px", margin: "10px" }}
      >
        FIGHT
      </button>
      {winner && (
        <div style={{ padding: "5px", borderRadius: "5px", margin: "10px" }}>
          WINNER:{winner}
        </div>
      )}
    </div>
  );
};

export default Fight;
