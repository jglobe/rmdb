import React from 'react';
import { Link } from 'react-router-dom';

import './Location.css';

export default function Location({ location }) {
  return (
    <div className="Location">
      <Link to={`/location/${location.id}`}>
        {location.name}
      </Link>
    </div>
  );
}
