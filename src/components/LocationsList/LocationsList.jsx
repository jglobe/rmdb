import React from "react";
import { useSelector } from "react-redux";

import Location from "../Location";
import Spinner from "../Spinner";
import Paginator from "../Paginator";

function LocationsList ()  {{
    const locations = useSelector(store => store.locations);

    const items = ;

    if (!characters.length) {
        return <Spinner />;
    }

    return (
        <>
        <div className="CharactersList">
            <h1>Characters</h1>
            <ul>
                {characters.map((item) => (
                    <li key={item.id}>
                        <Location
                        location={Location}
                        img={item.image}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        currentLocation={item.location.name}
                        firstEpisodeUrl={item.episode[0]}
                        firstEpisodeName={item.firstEpisodeName}
                        id={item.id}
                        />
                    </li>
                    );
                })}
            </ul>
        </div>
        <Paginator />
        </>
    );
}

export default CharactersList;
