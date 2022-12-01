import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchRecipe } from '../redux/actions';

function RecipesDetails(props) {
  const params = useParams();
  const { dispatch, location, recipe, loadingApi } = props;
  const [receita, setReceita] = useState([]);
  const [type, setType] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [medidas, setMedidas] = useState([]);
  useEffect(() => {
    if (location.pathname.includes('/meals/')) {
      dispatch(fetchRecipe(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`));
    } else { dispatch(fetchRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)); }
  }, []);

  useEffect(() => {
    if (recipe.meals) {
      setReceita(recipe.meals[0]);
      setType('Meal');
    } else if (recipe.drinks) {
      setReceita(recipe.drinks[0]);
      setType('Drink');
    }
  }, [recipe]);

  useEffect(() => {
    setIngredientes(Object.keys(receita)
      .filter((key) => key.includes('Ingredient'))
      .reduce((cur, key) => Object.assign(cur, { [key]: receita[key] }), []));
    setMedidas(Object.keys(receita)
      .filter((key) => key.includes('Measure'))
      .reduce((cur, key) => Object.assign(cur, { [key]: receita[key] }), []));
    console.log(medidas);
  }, [receita]);

  return (
     <Header pages="profile">
        <h1>Profile</h1>
      </Header>
      {loadingApi ? <h1>Loading</h1>
        : (
          <>
            <img
              data-testid="recipe-photo"
              src={ receita[`str${type}Thumb`] }
              alt={ receita[`str${type}`] }
            />
            <h1 data-testid="recipe-title">{receita[`str${type}`]}</h1>
            {(type === 'Meal')
              && <p data-testid="recipe-category">{receita.strCategory}</p>}
            {(type === 'Drink')
              && <p data-testid="recipe-category">{receita.strAlcoholic}</p>}
            {Object.values(ingredientes)
              .map((ingrediente, index) => (
                <p
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                >
                  {ingrediente}
                  {' '}
                  {medidas[`strMeasure${index + 1}`]}
                </p>))}
            <p data-testid="instructions">{receita.strInstructions}</p>
            {(receita.strYoutube)
            && <iframe
              data-testid="video"
              width="853"
              height="480"
              src={ receita.strYoutube }
              frameBorder="0"
              allow="accelerometer;
               autoplay; clipboard-write;
                encrypted-media;
                 gyroscope;
                  picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />}
          </>
        )}

    </div>
  );
}

const mapStateToProps = (state) => ({
  recipe: state.mealsReducer.recipe,
  loadingApi: state.mealsReducer.loadingApi,
});

RecipesDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  recipe: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
  loadingApi: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RecipesDetails);
