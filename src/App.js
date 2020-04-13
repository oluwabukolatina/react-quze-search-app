import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Courses from "./components/Courses";
import {AppProvider} from "./context/AppContext";
import useCourses from "./hooks/useCourses";
import Course from "./components/Course";

const App = () => {
    const {courses, searchWithName, name, onNameChange, authors, provider, level, category, providerChange, levelChange, authorChange, categoryChange} = useCourses();

    return (
      <Switch>
          <AppProvider value={{courses, name, searchWithName, onNameChange, authors, provider, level, category, providerChange, levelChange, authorChange, categoryChange}}>
          <Route exact path="/" component={Courses}/>
          <Route exact path="/course/:name" component={Course} />
          </AppProvider>
      </Switch>

  );
};
export default App;

