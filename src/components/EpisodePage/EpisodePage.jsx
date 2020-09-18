import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';

import Spinner from "../Spinner";

const EpisodePage = () => {
  const { id } = useParams();
  
  const [episode, setEpisode] = useState(null);

  useEffect(() =>  {
    async function getEpisode(id) {
      const episode = await api.getEpisode(id);
      setEpisode(episode);
    }

    getEpisode(id);
  }, [id]);

  if (!episode) {
    return <Spinner />;
  }

  return(
    <div className="page">
      <h1 className="page__title">{episode.name}</h1>
      <div className="page__content">
      <div>Episode number: {episode.id}</div>
      <div>{episode.episode}</div>
      <div>Air date: {episode.air_date}</div>
      <div>Created: {episode.created}</div>
      <div>{episode.characters}</div>
      </div>
    </div>
  );
}

export default EpisodePage;