import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCharactersThunk } from "../../actions/setCharactersAction";

import Character from "../Character";
import Spinner from "../Spinner";
import Paginator from "../Paginator";

import "./CharactersList.css";

function CharactersList () {
  const dispatch = useDispatch();

  const characters = useSelector(store => store.characters);

  React.useEffect(() => {
    dispatch(setCharactersThunk());
  }, [dispatch]);
  
  if (!characters.list.length) {
    return <Spinner />;
  }

  function onPrevPage() {
    dispatch(setCharactersThunk(characters.paginator.prevPageUrl));
  }

  function onNextPage() {
    dispatch(setCharactersThunk(characters.paginator.nextPageUrl));
  }

  return (
    <div className="page">
      <h1 className="page__title">Characters</h1>
      <div className="page__content">
        <ul>
          {characters.list.map((character) => (
            <li key={character.id}>
              <Character character={character} />
            </li>
          ))}
        </ul>
        <Paginator
          currentPage={characters.paginator.currentPage}
          pageCount={characters.paginator.pageCount}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />
      </div>
    </div>
  );
}

export default CharactersList;
