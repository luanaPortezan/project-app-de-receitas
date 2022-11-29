import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Meals from './pages/Meals';


function App() {
  return (
    <Switch>
      {/* <Route exact path="/" component={ Login } /> */}
      <Route path="/meals" component={ Recipes } />
      <Route path="/drinks" component={ Recipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
