// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function RecipeInProgressDrinks() {
//  const [isLoading, setIsLoading] = useState(true);
//  const [dataDrinksInProgress, setDataDrinksInProgress] = useState([]);
//  const [btnShare, setBtnShare] = useState(false);
//  const [elVerif, setElVerif] = useState([]);

//  const location = useLocation();
//  let dataProgress = [];
//  let ingredients = [];

//  const errorMsg = 'Error';

//  console.log(elVerif);

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
//    const oito = 8;

//    const inProgressRecipes = localStorage.getItem('inProgressRecipes');
//    if (inProgressRecipes !== null) recipe = JSON.parse(inProgressRecipes);
//    const keysInProgress = Object.keys(recipe);

//    // const ids = location.pathname.slice(oito);
//    // const numberCut = ids.indexOf('/');
//    // const id = ids.slice(0, numberCut);
//    const id = location.pathname.slice(0, oito);

//    // useEffect(() => {
//    //  if (location.pathname.includes('/meals/')) {
//    //    dispatch(fetchRecipe(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`));
//    //    dispatch(fetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='));
//    //  } else {

//    if (keysInProgress.includes('drinks')) {
//      const keysDrinks = Object.keys(recipe.drinks);
//      setBtnInProgress(keysDrinks.includes(`${id}`));
//    }
//    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
//    fetchDrinks(url)
//      .then((response) => setDataDrinksInProgress(response.drinks))
//      .catch(() => console.log(errorMsg))
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
//      .getItem('favoriteRecipes') ? JSON
//        .parse(localStorage.getItem('favoriteRecipes')) : [];
//    const favorite1 = {};
//    if (dataDrinksInProgress.length > 0) {
//      favorite1.id = dataDrinks[0].idDrink;
//      favorite1.type = 'drink';
//      favorite1.nationality = '';
//      favorite1.category = dataDrinks[0].strCategory;
//      favorite1.alcoholicOrNot = dataDrinks[0].strAlcoholic;
//      favorite1.name = dataDrinks[0].strDrink;
//      favorite1.image = dataDrinks[0].strDrinkThumb;
//    }
//    const allFavorites = [...favoritadoStorage, favorite1];
//    localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
//  };

//  if (dataDrinksInProgress.length > 0) {
//    dataProgress = dataDrinksInProgress;
//    const keysData = Object.keys(dataDrinksInProgress[0]);
//    const ingredientsFilter = keysData.filter((key) => key.includes('strIngredient'));
//    const meansureFilter = keysData.filter((key) => key.includes('strMeasure'));
//    const valuesIng = ingredientsFilter
//      .filter((ingredient) => (
//        dataDrinksInProgress[0][ingredient] !== null)
//        && (dataDrinksInProgress[0][ingredient] !== ''));
//    const valuesMen = meansureFilter
//      .filter((ingredient) => dataDrinksInProgress[0][ingredient] !== null);
//    valuesIng.forEach((add, index) => {
//      let newValue = '';
//      if (dataDrinksInProgress[0][valuesMen[index]] !== undefined) {
//        newValue = `${dataDrinksInProgress[0][add]}
//        - ${dataDrinksInProgress[0][valuesMen[index]]}`;
//      } else { newValue = `${dataDrinksInProgress[0][add]}`; }
//      ingredients = [...ingredients, newValue];
//    });
//  }

//  return (
//    <div>
//      <h1>ProgressDrinks</h1>
//      { (dataProgress.length > 0) && (
//        <div>
//          {(!isLoading) && (
//            <>
//              <h2 data-testid="recipe-title">{ dataProgress[0].strDrink }</h2>
//              <img
//                data-testid="recipe-photo"
//                src={ dataProgress[0].strDrinkThumb }
//                alt={ dataProgress[0].idDrink }
//                height="150px"
//              />
//              <h2 data-testid="recipe-category">
//                { `${dataProgress[0].strCategory} - ${dataProgress[0].strAlcoholic}` }
//              </h2>
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

// export default RecipeInProgressDrinks;
