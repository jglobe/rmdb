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
    <div className="character">
      <div className="imgBlock">
        <img src={character.image} alt={character.name}/>
      </div>
      <div className="textBlock">
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
          </p>
        <div className="locationBlock">
          <p className="title">Last known location:</p>
          <p className="location">{character.location.name}</p>
        </div>
        <div className="firstSeenBlock">
          <p className="title">First seen in:</p>
          <p className="firstEpisode">{character.firstEpisodeName}</p>
        </div>
      </div>
      
    </div>
  );
}