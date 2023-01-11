// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function RecipeInProgressMeals() {
//  const [isLoading, setIsLoading] = useState(true);
//  const [dataMealsInProgress, setDataMealsInProgress] = useState([]);
//  const [btnShare, setBtnShare] = useState(false);
//  const [elVerif, setElVerif] = useState([]);

//  const location = useLocation();
//  let dataProgress = [];
//  let ingredients = [];
//  const a = '';
//  const errorMessage = 'Error';

//  useEffect(() => {
//    localStorage.setItem('inProgressRecipes', JSON.stringify(elVerif));
//  }, [elVerif]);

//  const elVerify = ({ target: { checked, id } }) => {
//    if (checked) {
//      setElVerif([...elVerif, id]);
//    }
//    if (checked === false) {
//      setElVerif(elVerif.filter((el) => el !== id));
//    }
//  };

//  useEffect(() => {
//    let recipe = {};
//    const sete = 7;

//    const inProgressRecipes = localStorage.getItem('inProgressRecipes');
//    if (inProgressRecipes !== null) recipe = JSON.parse(inProgressRecipes);
//    const keysInProgress = Object.keys(recipe);

//    // const ids = location.pathname.slice(sete);
//    // const numberCut = ids.indexOf('/');
//    // const id = ids.slice(0, numberCut);
//    const id = location.pathname.slice(0, sete);
//    if (keysInProgress.includes('meals')) {
//      const keysMeals = Object.keys(recipe.meals);
//      setBtnInProgress(keysMeals.includes(`${id}`));
//    }
//    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//    fetchMeals(url)
//      .then((response) => setDataMealsInProgress(response.meals))
//      .catch(() => console.log(errorMessage))
//      .finally(() => setIsLoading(false));
//  }, [location.pathname]);

//  const linkCopied = () => {
//    const mil = 1000;
//    setBtnShare(true);
//    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
//    setTimeout(() => {
//      setBtnShare(false);
//    }, mil);
//  };

//  const qq = () => {
//    const favoritadoStorage = localStorage
//    // getFavoritesLocalStorage
//      .getItem('favoriteRecipes') ? JSON
//        .parse(localStorage.getItem('favoriteRecipes')) : [];
//    // console.log(favoritadoStorage);
//    const favorite1 = {};
//    if (dataMealsInProgress.length > 0) {
//      favorite1.id = dataMeals[0].idMeal;
//      favorite1.type = 'meal';
//      favorite1.nationality = dataMeals[0].strArea;
//      favorite1.category = dataMeals[0].strCategory;
//      favorite1.alcoholicOrNot = '';
//      favorite1.name = dataMeals[0].strMeal;
//      favorite1.image = dataMeals[0].strMealThumb;
//    }
//    const allFavorites = [...favoritadoStorage, favorite1];
//    localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
//  };

//  if (dataMealsInProgress.length > 0) {
//    dataProgress = dataMealsInProgress;
//    const keysData = Object.keys(dataMealsInProgress[0]);
//    const ingredientsFilter = keysData.filter((key) => key.includes('strIngredient'));
//    const meansureFilter = keysData.filter((key) => key.includes('strMeasure'));
//    const valuesIng = ingredientsFilter
//      .filter((ingredient) => (dataMealsInProgress[0][ingredient] !== null)
//      && (dataMealsInProgress[0][ingredient] !== ''));
//    const valuesMen = meansureFilter
//      .filter((ingredient) => dataMealsInProgress[0][ingredient] !== null);
//    valuesIng.forEach((add, index) => {
//      let newValue = '';
//      if (dataMealsInProgress[0][valuesMen[index]] !== undefined) {
//        newValue = `${dataMealsInProgress[0][add]}
//        - ${dataMealsInProgress[0][valuesMen[index]]}`;
//      } else { newValue = `${dataMealsInProgress[0][add]}`; }
//      ingredients = [...ingredients, newValue];
//    });
//  }

//  return (
//    <div>
//      <h1>ProgressMeals</h1>
//      { (dataProgress.length > 0) && (
//        <div>
//          {(!isLoading) && (
//            <>
//              <h2 data-testid="recipe-title">{ dataProgress[0].strMeal }</h2>
//              <img
//                data-testid="recipe-photo"
//                src={ dataProgress[0].strMealThumb }
//                alt={ dataProgress[0].idMeal }
//                height="150px"
//              />
//              <h2 data-testid="recipe-category">{ dataProgress[0].strCategory }</h2>
//            </>
//          )}

//          <ol>
//            {ingredients.map((ingredient, index) => (
//              <div key={ index }>
//                <label
//                  data-testid={ `${index}-ingredient-step` }
//                  htmlFor={ ingredient }
//                  className={ verifiedElements
//                    .some((el) => el === ingredient) ? 'checked' : 'noChecked' }
//                >
//                  <input
//                    onClick={ (event) => elVerify(event) }
//                    type="checkbox"
//                    id={ ingredient }
//                    name={ ingredient }
//                  />
//                  {ingredient}
//                </label>
//              </div>
//            ))}
//          </ol>
//          <p data-testid="instructions">{ dataProgress[0].strInstructions }</p>
//          <iframe title="video" data-testid="video" src={ a } />
//        </div>
//      )}
//      <button
//        type="button"
//        data-testid="share-btn"
//        onClick={ linkCopied }
//      >
//        Share
//      </button>
//      {btnShare && <span>Link copied!</span>}
//      <button type="button" data-testid="favorite-btn" onClick={ qq }>Favorite</button>
//      <button
//        type="button"
//        data-testid="finish-recipe-btn"
//      >
//        Recipe Finish
//      </button>
//    </div>
//  );
// }

// export default RecipeInProgressMeals;
