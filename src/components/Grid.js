import React, {useState} from 'react';
import Card from './Card';
import './grid.css';
import {players} from './database.js';

export default function Grid() {

  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleNextPlayer = () => {
    setCurrentPlayer(currentPlayer + 1);
  };

  const playAudio = () => {
    let swish = new Audio("/swish.mp3");
    const playPromise = swish.play();
    if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
  };

  return (
    <>
      <h3>Try to guess the player's name 😀</h3>
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
        <button 
          className="next-player-button mt-5" 
          onClick={() => {
            handleNextPlayer();
            playAudio();
          }}>
            Next player
        </button>
      </div>
    </>
  )
}
