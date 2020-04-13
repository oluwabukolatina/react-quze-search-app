import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import {AppProvider} from "./context/AppContext";
import useCourses from "./hooks/useCourses";


const App = () => {
    const {courses, searchWithName, name, onNameChange, authors, provider, level, category, levelChange} = useCourses();

    return (
      <Switch>
          <AppProvider value={{courses, name, searchWithName, onNameChange, authors, provider, level, category, levelChange}}>
          <Route exact path="/" component={Home}/>
          </AppProvider>
      </Switch>

  );
};
export default App;

