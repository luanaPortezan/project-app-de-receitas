import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
// import Recipes from './Recipes';

function Drinks() {
  const store = useStore();
  const maxNumber = 12;
  const [update, setUpdate] = useState(false);
  // const [update, setUpdate] = useState(false);
  // console.log(lengthDrinks)

  const { drinks } = store.getState().drinksReducer;

  useEffect(() => {
    setUpdate(true);
  }, [drinks]);

  return (

    <div>
      <Header>Drinks</Header>
      <h1 data-testid="page-title">Drinks</h1>
      <SearchBar />
      {update && drinks
        .filter((_, i) => i < maxNumber)
        .map((drink, i) => (
          <div key={ drink.idDrink } data-testid={ `${i}-recipe-card` }>
            <h3 data-testid={ `${i}-card-name` }>{drink.strDrink}</h3>
            <img
              width="150"
              data-testid={ `${i}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ `${drink.strDrink}` }
            />
          </div>)) }
    </div>
  );
}

export default Drinks;
