import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';

import Spinner from "../Spinner";

const LocationPage = () => {
  const { id } = useParams();
  
  const [location, setLocation] = useState(null);

  useEffect(() =>  {
    async function getLocation(id) {
      const location = await api.getLocation(id);
      setLocation(location);
    }

    getLocation(id);
  }, [id]);

  if (!location) {
    return <Spinner />;
  }

  return(
    <div className="page">
      <h1 className="page__title">{location.name}</h1>
      <div className="page__content">
      <div>Type: {location.type}</div>
      <div>Dimension: {location.dimension}</div>
      <div>Created: {location.created}</div>
      </div>
    </div>
  );
}

export default LocationPage;