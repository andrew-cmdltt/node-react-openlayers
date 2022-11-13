import React from 'react';
import './App.css';
import MapWrapper from './components/MapWrapper'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ErrorMessage} from "./components/ErrorMessage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MapWrapper />
          </Route>
          <Route path="*">
            <ErrorMessage errorMessage={"404 — страница не найдена"} />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App
