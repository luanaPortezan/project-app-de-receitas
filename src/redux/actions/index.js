const GET_RECIPES = 'GET_RECIPES';
const REQUEST_RECIPES = 'REQUEST_RECIPES';
const FAILED_REQUEST = 'FAILED_REQUEST';
const GET_CATEGORIES = 'GET_CATEGORIES';
const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';

function getRecipes(json) {
  return { type: GET_RECIPES, payload: json };
}
function getCategories(json) {
  return { type: GET_CATEGORIES, payload: json };
}

function requestRecipes() {
  return { type: REQUEST_RECIPES };
}

function requestCategories() {
  return { type: REQUEST_CATEGORIES };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchRecipes(url) {
  return async (dispatch) => {
    dispatch(requestRecipes());
    try {
      const response = await fetch(url);
      const json = await response.json();
      return dispatch(getRecipes(json));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}

// mudei pra assincrona pq não passava nos testes: fetchRecipes e fetchCategories

export function fetchCategories(url) {
  return async (dispatch) => {
    dispatch(requestCategories());
    try {
      const response = await fetch(url);
      const json = await response.json();
      return dispatch(getCategories(json));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
