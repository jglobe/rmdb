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
        <Route exact path="/">
          <Background />
        </Route>
        <Route path="/characters">
          <CharactersList />
        </Route>
        <Route path="/character/:id">
          <CharacterPage />
        </Route>
        <Route path="/episodes">
          <EpisodesList />
        </Route>
        <Route path="/episode/:id">
          <EpisodePage />
        </Route>
        <Route path="/locations">
          <LocationsList />
        </Route>
        <Route path="/location/:id">
          <LocationPage />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
