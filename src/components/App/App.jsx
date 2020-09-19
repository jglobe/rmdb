import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Background from "../Background";
import CharactersList from "../CharactersList";
import CharacterPage from "../CharacterPage";
import EpisodesList from "../EpisodesList";
import EpisodePage from "../EpisodePage";
import LocationsList from "../LocationsList";
import LocationPage from "../LocationPage";
import Footer from "../Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/rmdb">
          <Background />
        </Route>
        <Route path="/rmdb/characters">
          <CharactersList />
        </Route>
        <Route path="/rmdb/character/:id">
          <CharacterPage />
        </Route>
        <Route path="/rmdb/episodes">
          <EpisodesList />
        </Route>
        <Route path="/rmdb/episode/:id">
          <EpisodePage />
        </Route>
        <Route path="/rmdb/locations">
          <LocationsList />
        </Route>
        <Route path="/rmdb/location/:id">
          <LocationPage />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
