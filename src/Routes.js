import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Meals from './pages/Meals';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/meals" component={ Meals } />
      <Route path="/meals/:id-da-receita" component={ RecipeDetails } />
      <Route path="/drinks/:id-da-receita" component={ RecipeDetails } />
      <Route path="/meals/:id-da-receita/in-progress" component={ Login } />
      <Route path="/drinks/:id-da-receita/in-progress" component={ Login } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default Routes;
