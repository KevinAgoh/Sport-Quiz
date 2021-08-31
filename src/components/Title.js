import React from 'react';
import './title.scss';

export default function Title() {
  return (
    <div>
      <div className="title text-center m-3">
        <h1>Retro NBA quiz</h1>
        <div className="logo">
          <img src="nba_logo.png" alt="NBA logo" />
        </div>
      </div>
    </div>
  )
}
