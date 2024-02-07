import React from "react";

const StatsDisplay = ({ pokeStats, pokeName }) => {
  if (!pokeStats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokeName} Stats:</h2>
      <ul>
        {pokeStats.map((att) => (
          <li key={att.stat.name}>
            {att.stat.name} : {att.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsDisplay;
