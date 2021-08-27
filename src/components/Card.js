import React, { useState } from 'react';
import './card.css';


export default function Card(props) {

  const [showInfos, setShowInfos] = useState(false)

  return (
    <div className="player-card mt-5">
      <img src={props.picture} alt="" /> 
      <div className="player-details">
        {showInfos &&
          <>
            <h3>{props.name}</h3>
            <p>{props.team}</p>
            <p>{props.height}</p>
            <p>{props.position}</p>
          </>
        }
        <button 
          onClick={() => {
            setShowInfos(!showInfos);
          }}
          type="button" 
          className="btn btn-primary">
          Show player name
        </button>
      </div>
    </div>
  );
}
