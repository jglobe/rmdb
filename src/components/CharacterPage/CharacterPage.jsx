import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';

const CharacterPage = () => {

    const rickMortyApi = new Api();

    let { id } = useParams();

    useEffect(() =>  {
        async function getCharacter(id) {
            const character = await rickMortyApi.getCharacter(id);
            console.log(character);
        }

        getCharacter(id);
    }, [id, rickMortyApi]);
    

    return(
        
        <div className="CharacterPage">
            <h1>character name</h1>
            CharacterPage - {id}
        </div>
    );
}

export default CharacterPage;