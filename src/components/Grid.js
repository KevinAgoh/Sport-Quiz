import React from 'react';
import Card from './Card';
import './grid.css';
import '../database';

export default function Grid() {
  return (
    <div className="container">
      <div className="parent">
        <Card
          picture="https://www.basketball-reference.com/req/202106291/images/players/jordami01.jpg"
          name="Michael Jordan"
          team="Chicago Bulls"
          height="1,98m"
          position="Shooting Guard"
        />
        <Card
          picture="https://www.basketball-reference.com/req/202106291/images/players/malonka01.jpg"
          name="Karl Malone"
          team="Utah Jazz"
          height="2,06cm"
          position="Power Forward"
        />
        <Card 
          picture="https://www.basketball-reference.com/req/202106291/images/players/ervinju01.jpg"
          name="Julius Erving"
          team="Philadelphia 76ers"
          height="2,01cm"
          position="Small Forward"
        />

      </div>
    </div>
  )
}
