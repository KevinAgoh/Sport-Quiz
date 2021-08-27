import React, {useState} from 'react';
import Card from './Card';
import './grid.css';
import {players} from './database.js';

export default function Grid() {

  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleNextPlayer = () => {
    setCurrentPlayer(currentPlayer + 1);
  };

  return (
    <>
      <div className="parent">
          <Card
            picture={players[currentPlayer].picture}
            name={players[currentPlayer].name}
            team={players[currentPlayer].team}
            height={players[currentPlayer].height}
            position={players[currentPlayer].position}
          />
      </div>
      <div className="next-player d-flex justify-content-center">
        <button className="next-player-button mt-5" onClick={handleNextPlayer}>Next player</button>
      </div>
    </>
  )
}
