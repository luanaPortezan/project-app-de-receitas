import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import clipboardCopy from 'clipboard-copy';
// import fetchInProgress from '../api/fetchInProgress';
// import RecipeInProgressMeals from '../components/RecipeInProgressMeals';
// import RecipeInProgressDrink from '../components/RecipeInProgressDrinks';
// import shareIcon from '../images/shareIcon.svg';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeInProgress() {
  // const [recipe, setRecipe] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [btnShare] = useState(false);
  // eslint-disable-next-line no-unused-vars
  // const [item, setItem] = useState([]);
  // const [checked] = useState([]);
  // const [btnDisable] = useState(true);
  // eslint-disable-next-line no-unused-vars
  // const [favorites, setFavorites] = useState(false);

  // const path = useHistory().location.pathname;
  // const meals = path.includes('meals');
  // const id = path.split('/')[2];
  // const isMeals = meals ? 'Meal' : 'Drink';
  // console.log(isMeals);

  // useEffect(() => {
  //  const retornoApi = async () => {
  //    const receita = await fetchInProgress(meals, id);
  //    setRecipe(receita);
  //  };
  //  retornoApi();
  // }, [id, meals]);

  // useEffect(() => {
  //  if (history.location.pathname.includes('meals')) {
  //    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
  //      .then((response) => response.json())
  //      .then((data) => {
  //        setRecipe(data.meals[0]);
  //        setCategory('Meal');
  //      });
  //  } else {
  //    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)
  //      .then((response) => response.json())
  //      .then((data) => setRecipe(data.drinks[0]));
  //    setCategory('Drink');
  //  }
  //  setFavorites();
  //  item();
  // }, [item]);

  // const measure = () => Object.entries(recipe)
  //  .filter((key) => key[0].includes('strMeasure')).map((ingredient) => ingredient[1]);

  // const handleFavorite = () => {
  //  const favoritando = {
  //    id,
  //    type: isMeals,
  //    nationality: meals ? recipe.strArea : '',
  //    category: recipe.strCategory,
  //    alcoholicOrNot: meals ? '' : recipe.strAlcoholic,
  //    name: recipe[`str${isMeals}`],
  //    image: recipe[`str${isMeals}Thumb`],
  //  };
  //  const favoriteLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  //  localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteLS, favoritando]));
  //  const deleteLS = favoriteLS.find((el) => el.id === id);
  //  if (deleteLS) {
  //    const del = favoriteLS.filter((el) => el.id !== id);
  //    setFavorites(false);
  //    localStorage.setItem('favoriteRecipes', JSON.stringify(del));
  //  } else {
  //    setFavorites(true);
  //  }
  // };

  // const handleShare = () => {
  //  clipboardCopy(`http://localhost:3000${path.split('/in-progress')[0]}`);
  //  setBtnShare(true);
  //  const tempo = 3000;
  //  setTimeout(() => { setBtnShare(false); }, tempo);
  //  console.log(recipe.strDrinkThumb);
  // };

  return (
    <div>
      <p>oi</p>
      {/* <img
        width="150px"
        src={ meals ? recipe.strMealThumb : recipe.strDrinkThumb }
        alt=""
        data-testid="recipe-photo"
      /> */}
      {/* <p data-testid="recipe-title">
        {meals ? recipe.strMeal : recipe.strDrink}
      </p> */}
      {/* <button
        type="button"
        id="share"
        name="share"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="shareIcon.svg" />
      </button> */}
      { btnShare && <p>Link copied!</p> }

      {/* <button
        type="button"
        // style={ { position: 'fixed' } }
        onClick={ () => {
          // setFavorites(!favorites);
          // handleFavorite();
        } }
        src={ favorites ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          data-testid="favorite-btn"
          src={ favorites ? blackHeartIcon : whiteHeartIcon }
          alt=""
        />

      </button> */}
      {/* {
        meals ? <p data-testid="recipe-category">{recipe.strCategory}</p>
          : (
            <p data-testid="recipe-category">
              {`${recipe.strCategory} ${recipe.strAlcoholic}`}
            </p>)
      } */}
      {
        // measure.map((ingredient, index) => (
        //  <div key={ index }>
        // <label
        // htmlFor={ `${recipe}-ingredient-step` }
        //  data-testid={ `${recipe}-ingredient-step` }
        // >
        {/* className={ checked[index] ? 'decoration' : '' } */}
        // <input
        //  type="checkbox"
        //  id={ `${recipe}-ingredient-step` }
        //  name={ ingredient }
        //  value={ ingredient }
        //  checked={ checked[index] }
        /// >
        //  {`${ingredient} ${measure[index] !== undefined
        //    ? measure[index]
        //    : ''}`}
        // </label>
        // </div>
        // ))
      }

      {/* <p data-testid="instructions">{recipe.strInstructions}</p> */}

      {/* <button
        data-testid="finish-recipe-btn"
        type="button"
        id="finish"
        name="finish"
        // disabled={ btnDisable }
        // onClick={ handleClick }
      >
        Finalizar
      </button> */}
    </div>
  );
}

export default RecipeInProgress;
