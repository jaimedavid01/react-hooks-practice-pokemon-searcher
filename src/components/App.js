import React from "react";
import PokemonPage from "./PokemonPage";
import Intro from './Intro';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/app">
      <PokemonPage />
      </Route>

      <Route path="/">
      <Intro />
      </Route>
      
      </Switch>

    </div>
      </Router>
  );
}

export default App;
