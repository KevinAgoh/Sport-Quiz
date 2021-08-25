import React from 'react';
import Card from './Card';
import './grid.css';
import {players} from './database.js';
import Container from 'react-bootstrap/Container';

export default function Grid() {
  return (
    <Container className="p-3">
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
    </Container>
  )
}
