import React from "react";
import styled from "styled-components";

const List = styled.select`
  padding: 5px;
  border-radius: 90px;
  margin: 10px;
`;

const Pokelist = ({ pokeData, setPokeFighter }) => {
  const handleSelectChange = (e) => {
    const selectedPoke = pokeData.find((poke) => poke.name === e.target.value);
    setPokeFighter(selectedPoke);
  };

  return (
    <List onChange={handleSelectChange}>
      <option>Selectionner un pokémon</option>
      {pokeData.map((poke) => (
        <option key={poke.name} value={poke.name}>
          {poke.name}
        </option>
      ))}
    </List>
  );
};

export default Pokelist;
