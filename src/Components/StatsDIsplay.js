import React from "react";

const StatsDIsplay = ({ pokeStat, pokeName }) => {
  return (
    <div>
      <h2>{pokeName} Stats:</h2>
      <ul>
        {pokeStat.map((stat) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
};

export default StatsDIsplay;
