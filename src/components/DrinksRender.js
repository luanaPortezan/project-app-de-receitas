import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class DrinksRender extends React.Component {
  render() {
    const { loadingApi,
      recipes,
      drinks,
      lengthDrinks } = this.props;
    if (loadingApi) return <p>Loading</p>;
    return (
      <div>
        {!lengthDrinks && recipes.drinks
          ? recipes.drinks.map((drink, index) => {
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
          }) : drinks.map((drink, index) => {
            const img = `${index}-card-img`;
            const name = `${index}-card-name`;
            const num = 12;
            if (index < num) {
              return (
                <Link
                  to={ `/drinks/${drink.idDrink}` }
                  key={ drink.idDrink }
                  data-testid={ `${index}-recipe-card` }
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
DrinksRender.propTypes = {
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
export default connect(mapStateToProps)(withRouter(DrinksRender));
