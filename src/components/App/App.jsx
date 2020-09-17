import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header";
import CharactersList from "../CharactersList";
import CharacterPage from "../CharacterPage";
import EpisodesList from "../EpisodesList";
import LocationsList from "../LocationsList";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/characters">
            <CharactersList />
          </Route>
          <Route path={`/character/:id`}>
            <CharacterPage />
          </Route>
          <Route path="/episodes">
            <EpisodesList />
          </Route>
          <Route path="/locations">
            <LocationsList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
