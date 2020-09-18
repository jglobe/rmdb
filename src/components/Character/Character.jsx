import React from 'react';
import { Link } from 'react-router-dom';

import './Character.css';

export default function Character({ character }) {
  let statusCircleClass = 'statusCircle';

  if (character.status === 'Alive') {
    statusCircleClass += ' alive';
  } else if (character.status === 'Dead') {
    statusCircleClass += ' dead'
  }

  return (
    <div className="Character">
      <div className="imgBlock">
        <img src={character.image} alt={character.name}/>
      </div>
      <div className="textBlock">
        <div className="titleBlock">
          <p className="name">
            <Link to={`/character/${character.id}`}>
              {character.name}
            </Link>
          </p>
          <p className="status">
            <span className={statusCircleClass}></span>
            <span className="statusText">{character.status}</span>
            <span>-</span>
            <span className="species">{character.species}</span>
            <span className="gender">{character.gender}</span>
          </p>
        </div>
        <div className="locationBlock">
          <p className="title">Current location</p>
          <p className="location">{character.currentLocation}</p>
        </div>
        <div className="firstSeenBlock">
          <p className="title">First seen in:</p>
          <p className="firstEpisode">{character.firstEpisodeName}</p>
        </div>
      </div>
      
    </div>
  );
}