import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class MealsRender extends React.Component {
  render() {
    const { loadingApi,
      recipes,
      meals,
      lengthMeals } = this.props;
    if (loadingApi) return <p>Loading</p>;
    return (
      <div>
        {!lengthMeals && recipes.meals
          ? recipes.meals.map((meal, index) => {
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
          }) : meals.map((meal, index) => {
            const name = `${index}-card-name`;
            const num = 12;
            if (index < num) {
              return (
                <Link
                  to={ `/meals/${meal.idMeal}` }
                  key={ meal.idMeal }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    data-testid={ `${index}-card-img` }
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

MealsRender.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  loadingApi: PropTypes.bool.isRequired,
  recipes: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf,
  }).isRequired,
  categories: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf,
  }).isRequired,
  meals: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf,
    lengthMeals: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default connect(mapStateToProps)(withRouter(MealsRender));
