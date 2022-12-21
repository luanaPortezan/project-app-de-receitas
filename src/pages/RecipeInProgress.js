import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import fetchInProgress from '../api/fetchInProgress';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeInProgress() {
  const [recipe, setRecipe] = useState([]);
  const [btnShare, setBtnShare] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [ingredienteLS, setIngredienteLS] = useState([]);
  // const [isDisabled, setIsDisabled] = useState(true);
  const [listaIngredientes, setListaIngredientes] = useState([]);

  const history = useHistory();
  const path = useHistory().location.pathname;
  const mealsOk = path.includes('meals');
  const id = path.split('/')[2];
  const isMeals = mealsOk ? 'Meal' : 'Drink';
  const riscado = { textDecoration: 'line-through solid rgb(0, 0, 0)' };
  const naoRiscado = { textDecoration: 'none' };

  useEffect(() => {
    const retornoApi = async () => {
      const receita = await fetchInProgress(mealsOk, id);
      setRecipe(receita);
      setListaIngredientes(Object.entries(receita)
        .filter(([el, i]) => el.includes('strIngredient') && i));
    };
    retornoApi();
  }, [id, mealsOk]);

  const handleShare = () => {
    clipboardCopy(`http://localhost:3000${path.split('/in-progress')[0]}`);
    setBtnShare(true);
    const tempo = 3000;
    setTimeout(() => { setBtnShare(false); }, tempo);
    console.log(recipe.strDrinkThumb);
  };

  useEffect(() => {
    const favoriteLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const checkFavorite = favoriteLS.some((el) => el.id === id);
    setFavorites(checkFavorite);
  }, [id]);

  const handleFavorite = () => {
    const favoritando = {
      id,
      type: mealsOk ? 'meal' : 'drink',
      nationality: mealsOk ? recipe.strArea : '',
      category: recipe.strCategory,
      alcoholicOrNot: mealsOk ? '' : recipe.strAlcoholic,
      name: recipe[`str${isMeals}`],
      image: recipe[`str${isMeals}Thumb`],
    };
    const favoriteLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteLS, favoritando]));
    const deleteLS = favoriteLS.find((el) => el.id === id);
    if (deleteLS) {
      const del = favoriteLS.filter((el) => el.id !== id);
      setFavorites(false);
      localStorage.setItem('favoriteRecipes', JSON.stringify(del));
    } else {
      setFavorites(true);
    }
  };

  const ehComida = mealsOk ? 'meals' : 'drinks';

  const handleSaveIngredient = (target) => {
    const saveIngredientLS = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { drinks: {}, meals: {} };
    const saved = target.name;
    const ingrediente = saveIngredientLS[ehComida][id] || [];
    const novoIngrediente = [...ingrediente, saved];
    setIngredienteLS(novoIngrediente);
    const novoObjeto = { ...saveIngredientLS };
    novoObjeto[ehComida][id] = novoIngrediente;
    localStorage.setItem('inProgressRecipes', JSON.stringify(novoObjeto));
  };

  useEffect(() => {
    const saveIngredientLS = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { drinks: {}, meals: {} };
    const ingrediente = saveIngredientLS[ehComida][id] || [];
    setIngredienteLS(ingrediente);
    console.log(ingredienteLS.length);
  }, []);

  // useEffect(() => {
  //  // localStorage.setIt em('numero', listaIngredientes.length);
  //  const numLS = JSON.parse(localStorage.getItem('numero'));
  //  if (ingredienteLS.length === numLS) {
  //    setIsDisabled(false);
  //  }
  //  console.log(numLS);
  // }, [ingredienteLS]);

  const handleChecked = (ele) => ingredienteLS.some((el) => el === ele);

  const handleFinish = () => {
    const done = [{
      id,
      type: mealsOk ? 'meal' : 'drink',
      nationality: mealsOk ? recipe.strArea : '',
      category: recipe.strCategory,
      alcoholicOrNot: mealsOk ? '' : recipe.strAlcoholic,
      name: recipe[`str${isMeals}`],
      image: recipe[`str${isMeals}Thumb`],
      doneDate: new Date(),
      tags: recipe.strTags ? recipe.strTags.split(',') : [],
    }];
    const finishLS = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    localStorage.setItem('doneRecipes', JSON.stringify([...finishLS, ...done]));
    history.push('/done-recipes');
  };

  const isDisabled = () => {
    console.log(listaIngredientes);
    console.log(ingredienteLS);
    return listaIngredientes.length === ingredienteLS.length;
  };

  return (
    <div>
      <img
        width="150px"
        src={ mealsOk ? recipe.strMealThumb : recipe.strDrinkThumb }
        alt=""
        data-testid="recipe-photo"
      />
      <p data-testid="recipe-title">
        {mealsOk ? recipe.strMeal : recipe.strDrink}
      </p>
      <button
        type="button"
        id="share"
        name="share"
        data-testid="share-btn"
        onClick={ handleShare }
      >
        <img src={ shareIcon } alt="shareIcon.svg" />
      </button>
      { btnShare && <p>Link copied!</p> }

      <button
        data-testid="favorite-btn"
        type="button"
        onClick={ () => {
          setFavorites(!favorites);
          handleFavorite();
        } }
        src={ favorites ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          src={ favorites ? blackHeartIcon : whiteHeartIcon }
          alt=""
        />
      </button>
      {
        mealsOk ? <p data-testid="recipe-category">{recipe.strCategory}</p>
          : (
            <p data-testid="recipe-category">
              {`${recipe.strCategory} ${recipe.strAlcoholic}`}
            </p>)
      }
      <ul>
        {
          Object.entries(recipe)
            .filter(([el, i]) => el.includes('strIngredient') && i)
            .map((ele, index) => (
              <li key={ index }>
                <label
                  htmlFor={ `${index}-ingredient-step` }
                  key={ index }
                  data-testid={ `${index}-ingredient-step` }
                  style={ handleChecked(ele[1]) ? riscado : naoRiscado }
                >
                  <input
                    type="checkbox"
                    name={ ele[1] }
                    id={ `${index}-ingredient-step` }
                    checked={ handleChecked(ele[1]) }
                    onChange={ ({ target }) => {
                      handleSaveIngredient(target);
                    } }
                  />
                  {ele[1]}
                </label>
              </li>
            ))
        }
      </ul>
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        id="finish"
        name="finish"
        disabled={ !isDisabled() }
        onClick={ handleFinish }
      >
        Finalizar
      </button>
    </div>
  );
}
export default RecipeInProgress;
