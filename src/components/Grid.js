import React, {useState} from 'react';
import './grid.css';
import './card.css';
import {players} from './database.js';

export default function Grid() {

  const [currentPlayer, setCurrentPlayer] = useState(0);
  let [showInfos, setShowInfos] = useState(false);

  const handleNextPlayer = () => {
    setCurrentPlayer(currentPlayer + 1);
    setShowInfos(showInfos = false);
  };

  const handleShowInfo = () => {
    setShowInfos(showInfos = true);
  }

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
        <div className="player-card mt-5">
          <img src={players[currentPlayer].picture} alt="" /> 
          <div className="player-details">
            {showInfos &&
              <>
                <h3>{players[currentPlayer].name}</h3>
                <p>{players[currentPlayer].team}</p>
                <p>{players[currentPlayer].height}</p>
                <p>{players[currentPlayer].position}</p>
              </>
            }
          </div>
          <button 
            onClick={() => {
              handleShowInfo();
            }}
            type="button"
            className="disclose-button">
            Show player name
          </button>
        </div>
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
