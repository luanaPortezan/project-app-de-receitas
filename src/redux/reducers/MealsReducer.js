import { MEALS_INFO } from '../actions/mealsAction';

const INITIAL_STATE = {
  loadingApi: true,
  recipes: [],
  categories: [],
  error: '',
  meals: [] };

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_RECIPES':
    return { ...state, loadingApi: true };
  case 'GET_RECIPES':
    return { ...state, recipes: action.payload, loadingApi: false };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload, loadingApi: false };
  case 'REQUEST_CATEGORIES':
    return { ...state, loadingApi: true };
  case 'GET_CATEGORIES':
    return { ...state, categories: action.payload, loadingApi: false };
  case MEALS_INFO:
    return {
      ...state,
      lengthMeals: action.lengthMeals,
      meals: action.meals,
    };
  default:
    return state;
  }
};

export default mealsReducer;
