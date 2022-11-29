import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchRecipes } from '../redux/actions';

class Recipes extends React.Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    console.log(location);
    if (location.pathname === '/meals') {
      dispatch(fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s='));
    } else { dispatch(fetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')); }
  }

  render() {
    const { loadingApi, recipes } = this.props;
    if (loadingApi) return <p>Loading</p>;
    return (
      <div>
        {recipes.meals
          && recipes.meals.map((meal, index) => {
            const card = `${index}-recipe-card`;
            const img = `${index}-card-img`;
            const name = `${index}-card-name`;
            const num = 12;
            if (index < num) {
              return (
                <div
                  key={ meal.idMeal }
                  data-testid={ card }
                >
                  <img
                    data-testid={ img }
                    src={ meal.strMealThumb }
                    alt={ meal.strMeal }
                  />
                  <h2 data-testid={ name }>{meal.strMeal}</h2>
                </div>
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
                <div
                  key={ drink.idDrink }
                  data-testid={ card }
                >
                  <img
                    data-testid={ img }
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                  />
                  <h2 data-testid={ name }>{drink.strDrink}</h2>
                </div>
              );
            }
            return null;
          })}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.mealsReducer.recipes,
  loadingApi: state.mealsReducer.loadingApi,
});

Recipes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  loadingApi: PropTypes.bool.isRequired,
  recipes: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
};

export default connect(mapStateToProps)(withRouter(Recipes));
