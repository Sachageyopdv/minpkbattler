import React from "react";

const Pokelist = ({ pokeData, setPokeFighter }) => {
  const handleSelectChange = (e) => {
    const selectedPoke = pokeData.find((poke) => poke.name === e.target.value);
    setPokeFighter(selectedPoke);
  };

  return (
    <select
      onChange={handleSelectChange}
      style={{ padding: "5px", borderRadius: "5px", margin: "10px" }}
    >
      {pokeData.map((poke) => (
        <option key={poke.name} value={poke.name}>
          {poke.name}
        </option>
      ))}
    </select>
  );
};

export default Pokelist;
