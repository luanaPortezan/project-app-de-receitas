import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/Header';
import DrinksRender from '../components/DrinksRender';
import { fetchCategories, fetchRecipes } from '../redux/actions';
import MealsRender from '../components/MealsRender';

import Footer from './Footer';

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
    const { loadingApi,
      categories,
      location } = this.props;
    if (loadingApi) return <p>Loading</p>;
    return (
      <div>
        <Header pages isSearch>
          {location.pathname === '/meals' ? <h1>Meals</h1> : <h1>Drinks</h1>}
        </Header>

        <MealsRender />

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

        <DrinksRender />
        <Footer />

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
          style={ { paddingBottom: '120px' } }
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
  meals: state.mealsReducer.meals,
  lengthMeals: state.mealsReducer.lengthMeals,
  drinks: state.drinksReducer.drinks,
  lengthDrinks: state.drinksReducer.lengthDrink,
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
  meals: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf,
    lengthMeals: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default connect(mapStateToProps)(withRouter(Recipes));
