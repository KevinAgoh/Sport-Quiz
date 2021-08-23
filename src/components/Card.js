import React from 'react'
import './card.css';

export default function Card() {
  return (
    <div className="player-card">
      <img src="https://www.basketball-reference.com/req/202106291/images/players/jordami01.jpg" alt="" />
      <div className="player-details">
        <h3>Michael Jordan</h3>
        <p>Chicago Bulls</p>
        <p>1,98m</p>
        <p>Shooting Guard</p>
        <button>Show player name</button>
      </div>
    </div>
  )
}
