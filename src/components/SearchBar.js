import { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchByFirstLetter,
  fetchByFirstLetterD,
  fetchByIngredient,
  fetchByIngredientD,
  fetchByName,
  fetchByNameD,
} from '../api/fetchApiEndPoints';
import { drinksInfo } from '../redux/actions/drinksActions';
import { mealsInfo } from '../redux/actions/mealsAction';
import { inputSelected, reciepesSelect } from '../redux/actions/searchActions';

function SearchBar() {
  const [inputRadio, setInputRadio] = useState('');
  const [clickDrinks, setClickDrinks] = useState(false);
  const [clickMeals, setClickMeals] = useState(false);
  const store = useStore();
  const dispatch = useDispatch();
  const storeValue = store.getState().selectedReducer.value;
  const radioValue = store.getState().selectedReducer.inputSelected;
  const history = useHistory();
  const alert = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    const verifyRadio = () => {
      dispatch(inputSelected(inputRadio));
    };
    verifyRadio();
  }, [inputRadio, dispatch]);

  const dispatchReciepesMeals = async () => {
    if (history.location.pathname === '/meals') {
      if (radioValue === 'ingredient') {
        dispatch(reciepesSelect(await fetchByIngredient(storeValue)));
      }

      if (radioValue === 'name') {
        dispatch(reciepesSelect(await fetchByName(storeValue)));
      }

      if (radioValue === 'first-letter') {
        if (storeValue.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          dispatch(reciepesSelect(await fetchByFirstLetter(storeValue)));
        }
      }
    }
  };

  useEffect(() => {
    const f = async () => {
      await dispatchReciepesMeals();

      if (store.getState().selectedReducer.reciepes) {
        const Meals = store.getState().selectedReducer.reciepes.meals;
        if (Meals === null) {
          return global.alert(alert);
        }
        if (Meals.length === 1) {
          history.push(`/meals/${Meals[0].idMeal}`);
        }
        dispatch(mealsInfo(
          Meals.length,
          store.getState().selectedReducer.reciepes.meals,
        ));
      }
    };

    f();
  }, [clickMeals, dispatch, history, store]);

  const dispatchReciepesDrinks = async () => {
    if (history.location.pathname === '/drinks') {
      if (radioValue === 'ingredient') {
        dispatch(reciepesSelect(await fetchByIngredientD(storeValue)));
      }

      if (radioValue === 'name') {
        dispatch(reciepesSelect(await fetchByNameD(storeValue)));
      }

      if (radioValue === 'first-letter') {
        if (storeValue.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          dispatch(reciepesSelect(await fetchByFirstLetterD(storeValue)));
        }
      }
    }
  };
  useEffect(() => {
    const f = async () => {
      await dispatchReciepesDrinks();

      if (store.getState().selectedReducer.reciepes) {
        const Drinks = store.getState().selectedReducer.reciepes.drinks;
        if (Drinks === null) {
          return global.alert(alert);
        }
        if (Drinks.length === 1) {
          history.push(`/drinks/${Drinks[0].idDrink}`);
        }
        dispatch(drinksInfo(
          Drinks.length,
          store.getState().selectedReducer.reciepes.drinks,
        ));
      }
    };
    f();
  }, [clickDrinks, dispatch, history, store]);

  const handleClick = () => {
    if (history.location.pathname === '/drinks') setClickDrinks(!clickDrinks);
    if (history.location.pathname === '/meals') setClickMeals(!clickMeals);
  };

  return (
    <>

      <input
        id="search-input"
        type="input"
        value={ searchInput }
        data-testid="search-input"
      />

      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          id="ingredient"
          name="search"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ ({ target }) => setInputRadio(target.value) }
        />
      </label>

      <label htmlFor="name">
        Name
        <input
          type="radio"
          id="name"
          name="search"
          value="name"
          data-testid="name-search-radio"
          onClick={ ({ target }) => setInputRadio(target.value) }
        />
      </label>

      <label htmlFor="first-letter">
        First letter
        <input
          type="radio"
          id="first-letter"
          name="search"
          value="first-letter"
          data-testid="first-letter-search-radio"
          onClick={ ({ target }) => setInputRadio(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>

    </>
  );
}

export default SearchBar;
