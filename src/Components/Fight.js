import React from "react";
import { useState, useEffect } from "react";
import StatsDisplay from "./StatsDIsplay";
import styled from "styled-components";

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

function Fight({ poke1, poke2 }) {
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
    poke1Stats[1].base_stat > poke2Stats[1].base_stat
      ? setWinner(poke1.name)
      : setWinner(poke2.name);
  };

  return (
    <div>
      <StatsDisplay pokeStats={poke1Stats} pokeName={poke1.name} />
      <StatsDisplay pokeStats={poke2Stats} pokeName={poke2.name} />
      <Button onClick={startFight}>FIGHT</Button>
      {winner && (
        <div style={{ padding: "5px", borderRadius: "5px", margin: "10px" }}>
          WINNER:{winner}
        </div>
      )}
    </div>
  );
}

export default Fight;
