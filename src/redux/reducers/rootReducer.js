import { combineReducers } from 'redux';
import mealsReducer from './MealsReducer';
import drinksReducer from './DrinksReducer';

const rootReducer = combineReducers({
  mealsReducer,
  drinksReducer,
});

export default rootReducer;
