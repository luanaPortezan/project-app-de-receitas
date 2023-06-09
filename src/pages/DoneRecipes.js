import React from 'react';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

class DoneRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      copied: false,
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage = () => {
    const doneRecipes1 = JSON.parse(localStorage.getItem('doneRecipes'));
    this.setState({
      recipes: doneRecipes1,
    });
  };

  onclickMeal = () => {
    const doneRecipes1 = JSON.parse(localStorage.getItem('doneRecipes'));
    const newRecipe = doneRecipes1.filter((reci) => reci.type === 'meal');
    this.setState({
      recipes: newRecipe,
    });
  };

  onclickDrink = () => {
    const doneRecipes1 = JSON.parse(localStorage.getItem('doneRecipes'));
    const newRecipe = doneRecipes1.filter((reci1) => reci1.type === 'drink');
    this.setState({
      recipes: newRecipe,
    });
  };

  render() {
    const { recipes, copied } = this.state;
    return (
      <div>
        <Header pages isSearch={ false }>
          <h1>Done Recipes</h1>
        </Header>
        <div>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ this.getFromLocalStorage }
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
        </div>
        <div>
          {copied && <p>Link copied!</p>}
          {recipes
            && recipes.map((rec, index) => (
              <div
                key={ index }
              >
                <Link to={ `${rec.type}s/${rec.id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    src={ rec.image }
                    alt="Receita Imagens png"
                  />
                  <h4 data-testid={ `${index}-horizontal-name` }>{rec.name}</h4>
                </Link>
                <p data-testid={ `${index}-horizontal-done-date` }>
                  Feita em:
                  {' '}
                  {rec.doneDate}
                </p>
                <button
                  type="button"
                  onClick={ () => {
                    clipboardCopy(`http://localhost:3000/${rec.type}s/${rec.id}`);
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
                {rec.type === 'drink' ? (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {`${rec.alcoholicOrNot}`}
                  </p>
                ) : (
                  <h5 data-testid={ `${index}-horizontal-top-text` }>
                    {rec.nationality}
                    {' '}
                    -
                    {' '}
                    {rec.category}
                  </h5>
                )}
                {rec.tags.map((tag1) => (
                  <p
                    data-testid={ `${index}-${tag1}-horizontal-tag` }
                    key={ tag1 }
                  >
                    {tag1}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default DoneRecipes;
