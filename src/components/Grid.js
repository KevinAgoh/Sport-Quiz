import React from 'react';
import Card from './Card';
import './grid.css';
import {players} from './database.js';

export default function Grid() {
  return (
    <div className="container">
      <div className="parent">
        {players.map(player =>(
          <Card
            picture={player.picture}
            name={player.name}
            team={player.team}
            height={player.height}
            position={player.position}
          />
        ))}
      </div>
    </div>
  )
}
