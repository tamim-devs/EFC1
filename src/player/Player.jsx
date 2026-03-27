import React, { use, useState } from "react";
import Available from './../available/Available';
import Selected from './../selected/Selected';

const Player = ({ playerPromise,coin,setCoin }) => {
  const players = use(playerPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayer,setSelectedPlayer] = useState([])

  console.log(players);
  return (
    <div>
      <div className="flex justify-between">
        {selectedType === "available" ? <h1>ALL PLAYER</h1> : <h1>Selected PLAYER</h1> }
        <div className="gap-4 mt-1">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE69]" : "btn"} `}
          >
            Available  {players.length}
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-yellow-200" : "bg-green-200"}`}
          >
            Selected {selectedPlayer.length}
          </button>

        </div>
      </div>
      {selectedType === "available" ? <Available 
      playerPromise={playerPromise} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin} players={players}/> : 
      <Selected selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin} players={players} />}
    </div>
  );
};

export default Player;
