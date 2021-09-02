import React, {useState} from 'react';
import {players} from './database.js';
import './grid.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Grid() {

  AOS.init();

  const [currentPlayer, setCurrentPlayer] = useState(0);
  let [showInfos, setShowInfos] = useState(false);

  const handleNextPlayer = () => {

    const nextPlayer = currentPlayer + 1;

    if (nextPlayer < players.length) {
      setCurrentPlayer(currentPlayer + 1);
      setShowInfos(showInfos = false);
    } else {
      alert("You have reached the end of the quiz !");
    }
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
        <div data-aos="fade-in">
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
          <div className="next-player d-flex justify-content-center">
            <button 
              className="next-player-button mt-5" 
              onClick={() => {
                handleNextPlayer();
                playAudio();
                AOS.init();
              }}>
                Next player
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
