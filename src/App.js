import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Recipes from './pages/Recipes';
import Login from './pages/Login';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';
import Footer from './pages/Footer';
import Drinks from './pages/Drinks';
import Meals from './pages/Meals';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/drinks" component={ Recipes } />
        <Route exact path="/meals" component={ Recipes } />
        <Route path="/meals/:id-da-receita" component={ RecipeDetails } />
        <Route path="/drinks/:id-da-receita" component={ RecipeDetails } />
        <Route path="/meals/:id-da-receita/in-progress" component={ Login } />
        <Route path="/drinks/:id-da-receita/in-progress" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/footer" component={ Footer } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/meals" component={ Meals } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
