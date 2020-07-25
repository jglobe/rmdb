import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';

const CharacterPage = () => {

    const rickMortyApi = new Api();

    let { id } = useParams();

    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [image, setImage] = useState();
    const [species, setSpecies] = useState();

    useEffect(() =>  {
        async function getCharacter(id) {
            const character = await rickMortyApi.getCharacter(id);
            setName(character.name);
            setGender(character.gender);
            setImage(character.image);
            setSpecies(character.species);

            console.log(character);
        }

        getCharacter(id);
    }, [id, rickMortyApi]);
    

    return(
        
        <div className="CharacterPage">
            <h1>{name}</h1>
            <div className="character_block">
                <div> <img src={image} alt="characterphoto"/></div>
                <div>{gender}</div>
                <div>{species}</div>
                <div></div>
            </div>
        </div>
    );
}

export default CharacterPage;