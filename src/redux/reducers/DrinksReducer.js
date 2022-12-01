import { DRINKS_INFO } from '../actions/drinksActions';

const INITIAL_STATE = { drinks: [] };

const drinksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DRINKS_INFO:
    return {
      ...state,
      lengthDrink: action.lengthDrinks,
      drinks: action.drinks,
    };
  default:
    return state;
  }
};

export default drinksReducer;
