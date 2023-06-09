const GET_RECIPES = 'GET_RECIPES';

const GET_RECIPE = 'GET_RECIPE';
const REQUEST_RECIPES = 'REQUEST_RECIPES';
const REQUEST_RECIPE = 'REQUEST_RECIPE';
const FAILED_REQUEST = 'FAILED_REQUEST';
const GET_CATEGORIES = 'GET_CATEGORIES';
const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';

function getRecipes(json) {
  return { type: GET_RECIPES, payload: json };
}
function getRecipe(json) {
  return { type: GET_RECIPE, payload: json };
}
function getCategories(json) {
  return { type: GET_CATEGORIES, payload: json };
}

function requestRecipes() {
  return { type: REQUEST_RECIPES };
}
function requestRecipe() {
  return { type: REQUEST_RECIPE };
}

function requestCategories() {
  return { type: REQUEST_CATEGORIES };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchRecipes(url) {
  return (dispatch) => {
    dispatch(requestRecipes());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(getRecipes(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}

export function fetchCategories(url) {
  return (dispatch) => {
    dispatch(requestCategories());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(getCategories(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}

export function fetchRecipe(url) {
  return (dispatch) => {
    dispatch(requestRecipe());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(getRecipe(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
