import React from 'react';
import { Link } from 'react-router-dom';

import './Episode.css';

export default function Episode({ episode }) {
  return (
    <div className="Episode">
      <Link to={`/episode/${episode.id}`}>
        {episode.name}
      </Link>
    </div>
  );
}
