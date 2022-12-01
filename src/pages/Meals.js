import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Meals() {
  const store = useStore();
  const { lengthMeals } = store.getState().mealsReducer;
  const { meals } = store.getState().mealsReducer;
  const [update, setUpdate] = useState(false);
  const maxNumber = 12;

  useEffect(() => {
    // 👇️ some condition here
    if (lengthMeals) {
      setUpdate(true);
    }
  }, [update]);

  return (

    <div>
      <Header>Pagina de Receitas</Header>
      <h1 data-testid="page-title">Meals</h1>
      <SearchBar />
      {update && meals
        .filter((_, i) => i < maxNumber)
        .map((meal, i) => (
          <div key={ meal.idMeal } data-testid={ `${i}-recipe-card` }>
            <h1 data-testid={ `${i}-card-name` }>{meal.strMeal}</h1>
            <img
              width="150"
              data-testid={ `${i}-card-img` }
              src={ meal.strMealThumb }
              alt={ `${meal.strMeal}` }
            />
          </div>))}
    </div>
  );
}

export default Meals;
