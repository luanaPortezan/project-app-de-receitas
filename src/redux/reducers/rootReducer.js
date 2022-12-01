import { combineReducers } from 'redux';
import mealsReducer from './MealsReducer';
import drinksReducer from './DrinksReducer';
import selectedReducer from './SelectedReducer';

const rootReducer = combineReducers({
  mealsReducer,
  drinksReducer,
  selectedReducer,
});

export default rootReducer;
