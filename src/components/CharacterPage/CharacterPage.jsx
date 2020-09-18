import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from "../../api";

import Spinner from "../Spinner";

const CharacterPage = () => {
  const { id } = useParams();
  
  const [character, setCharacter] = useState(null);

  useEffect(() =>  {
    async function getCharacter(id) {
      const character = await api.getCharacter(id);
      setCharacter(character);
    }

    getCharacter(id);
  }, [id]);

  if (!character) {
    return <Spinner />;
  }

  return(
    <div className="page">
      <h1 className="page__title">{character.name}</h1>
      <div className="page__content">
        <div><img src={character.image} alt={character.name} /></div>
        <div>Status: {character.status}</div>
        <div>Species: {character.species}</div>
        <div>Type: {character.type}</div>
        <div>Gender: {character.gender}</div>
        <div>Origin: <a href={character.origin.url}>{character.origin.name}</a></div>
        <div>Created: {character.created}</div>
      </div>
    </div>
  );
}

export default CharacterPage;