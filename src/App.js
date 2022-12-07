import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/meals" component={ Recipes } />
      <Route path="/meals/:id" component={ RecipeDetails } />
      <Route path="/drinks/:id" component={ RecipeDetails } />
      <Route path="/meals/:id/in-progress" component={ Login } />
      <Route path="/drinks/:id/in-progress" component={ Login } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done_recipes" component={ DoneRecipes } />
      <Route exact path="/favorite_recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
