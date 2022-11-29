const GET_RECIPES = 'GET_RECIPES';
const REQUEST_RECIPES = 'REQUEST_RECIPES';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getRecipes(json) {
  return { type: GET_RECIPES, payload: json };
}

function requestRecipes() {
  return { type: REQUEST_RECIPES };
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

export function test() {
  return true;
}
