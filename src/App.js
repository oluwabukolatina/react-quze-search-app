import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import {Container} from "react-bootstrap";


const App = () => {
  return (
      <Switch>
          <Route exact path="/" component={Home}/>
      </Switch>

  );
};
export default App;

