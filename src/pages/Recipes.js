import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { fetchCategories, fetchRecipes } from '../redux/actions';

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      filtrado: 'All',
    };
  }

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll = () => {
    const { dispatch, location } = this.props;
    if (location.pathname === '/meals') {
      dispatch(fetchCategories('https://www.themealdb.com/api/json/v1/1/list.php?c=list'));
      dispatch(fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s='));
    } else {
      dispatch(fetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='));
      dispatch(fetchCategories('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'));
    }
    this.setState(() => ({ filtrado: 'All' }));
  };

  filtrar = (event) => {
    const { filtrado } = this.state;
    const { dispatch, location } = this.props;
    if (filtrado === event.target.value) {
      this.fetchAll();
    } else {
      this.setState(() => ({ filtrado: event.target.value }));
      if (location.pathname === '/meals') {
        dispatch(fetchRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${event.target.value}`));
      } else {
        dispatch(fetchRecipes(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${event.target.value}`));
      }
    }
  };

  render() {
    const { loadingApi, recipes, categories } = this.props;
    if (loadingApi) return <p>Loading</p>;
    return (
      <div>
        <Header />
        {/* falta colocar um if/else no Header para se for Drinks ou Meals */}
        <SearchBar />
        {recipes.meals
          && recipes.meals.map((meal, index) => {
            const card = `${index}-recipe-card`;
            const img = `${index}-card-img`;
            const name = `${index}-card-name`;
            const num = 12;
            if (index < num) {
              return (
                <Link
                  to={ `/meals/${meal.idMeal}` }
                  key={ meal.idMeal }
                  data-testid={ card }
                >
                  <img
                    data-testid={ img }
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                    width="150"
                  />
                  <h2 data-testid={ name }>{meal.strMeal}</h2>
                </Link>
              );
            }
            return null;
          })}
        {categories.meals
          && categories.meals.map((categorie, index) => {
            const testid = `${categorie.strCategory}-category-filter`;
            const num = 5;
            if (index < num) {
              return (
                <button
                  type="button"
                  data-testid={ testid }
                  onClick={ this.filtrar }
                  value={ categorie.strCategory }

                >
                  {categorie.strCategory}

                </button>
              );
            }
            return null;
          })}
        {recipes.drinks
          && recipes.drinks.map((drink, index) => {
            const card = `${index}-recipe-card`;
            const img = `${index}-card-img`;
            const name = `${index}-card-name`;
            const num = 12;
            if (index < num) {
              return (
                <Link
                  to={ `/drinks/${drink.idDrink}` }
                  key={ drink.idDrink }
                  data-testid={ card }

                >
                  <img
                    data-testid={ img }
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                    width="150"
                  />
                  <h2 data-testid={ name }>{drink.strDrink}</h2>
                </Link>
              );
            }
            return null;
          })}
        {categories.drinks
          && categories.drinks.map((categorie, index) => {
            const testid = `${categorie.strCategory}-category-filter`;
            const num = 5;
            if (index < num) {
              return (
                <button
                  data-testid={ testid }
                  type="button"
                  onClick={ this.filtrar }
                  value={ categorie.strCategory }
                >
                  {categorie.strCategory}

                </button>
              );
            }
            return null;
          })}

        <button
          data-testid="All-category-filter"
          type="button"
          onClick={ this.fetchAll }
        >
          All

        </button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.mealsReducer.recipes,
  categories: state.mealsReducer.categories,
  loadingApi: state.mealsReducer.loadingApi,
});

Recipes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  loadingApi: PropTypes.bool.isRequired,
  recipes: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
  categories: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
};

export default connect(mapStateToProps)(withRouter(Recipes));
