import React from "react";
import Player from "./Player";
import players from "./players"; // Assuming you have a file named "players.js" exporting an array of player data.

const PlayersList = () => {
  return (
    <div style={{ display: "inline", textAlign: "center" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
