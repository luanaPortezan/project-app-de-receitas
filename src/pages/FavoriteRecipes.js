import React from 'react';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

class FavoriteRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      copied: false,
    };
  }

  componentDidMount() {
    this.getFavFromLocalStorage();
  }

  getFavFromLocalStorage = () => {
    const doneRecipes1 = JSON.parse(localStorage.getItem('favoriteRecipes'));
    this.setState({
      recipes: doneRecipes1,
    });
  };

  onclickMeal = () => {
    const { recipes } = this.state;
    const newRecipe = recipes.filter((reci) => reci.type === 'meal');
    this.setState({
      recipes: newRecipe,
    });
  };

  onclickDrink = () => {
    const { recipes } = this.state;
    const newRecipe = recipes.filter((reci1) => reci1.type === 'drink');
    this.setState({
      recipes: newRecipe,
    });
  };

  buttonRemoveFav = (id) => {
    const { recipes } = this.state;
    const novoRec = recipes.filter((recps) => recps.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(novoRec));

    this.setState({
      recipes: novoRec,
    });
  };

  render() {
    const { recipes, copied } = this.state;
    return (
      <div>
        <Header pages isSearch={ false }>
          <h1>Favorite Recipes</h1>
        </Header>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ this.getFavFromLocalStorage }
        >
          All

        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ this.onclickMeal }
        >
          Meals

        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ this.onclickDrink }
        >
          Drinks

        </button>
        {copied && <p>Link copied!</p>}
        {recipes
        && recipes.map((recipe, index) => (
          <div key={ index }>
            <Link to={ `${recipe.type}s/${recipe.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt="imagem da receita favoritada"
              />
              <h5 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h5>
            </Link>
            {recipe.type === 'drink' ? (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipe.alcoholicOrNot}
              </p>
            ) : (
              <h5 data-testid={ `${index}-horizontal-top-text` }>
                {recipe.nationality}
                {' '}
                -
                {' '}
                {recipe.category}
              </h5>
            )}
            <button
              type="button"
              onClick={ () => {
                clipboardCopy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
                this.setState({
                  copied: true,
                });
              } }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="Icone de compartilhamento"
              />
            </button>
            <button
              type="button"
              onClick={ () => this.buttonRemoveFav(recipe.id) }
            >
              <img
                src={ blackHeartIcon }
                alt="black heart icon"
                data-testid={ `${index}-horizontal-favorite-btn` }
              />
            </button>
          </div>
        ))}

      </div>
    );
  }
}

export default FavoriteRecipes;
