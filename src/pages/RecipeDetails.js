import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
// import Header from '../components/Header';
import { fetchRecipe, fetchRecipes } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.css';

function RecipesDetails(props) {
  const params = useParams();
  const { dispatch, location, recipe, loadingApi, sugestion } = props;
  const [receita, setReceita] = useState([]);
  const [type, setType] = useState('');
  const [sugesType, setSugesType] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [medidas, setMedidas] = useState([]);
  const [startButton, setStartButton] = useState(true);
  const [continueButton, setContinueButton] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/meals/')) {
      dispatch(fetchRecipe(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`));
      dispatch(fetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='));
    } else {
      dispatch(fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s='));
      dispatch(fetchRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`));
    }
    if (JSON.parse(localStorage.getItem('doneRecipes'))) {
      (JSON.parse(localStorage.getItem('doneRecipes'))).forEach((element) => {
        if (element.id === params.id) {
          setStartButton(false);
        }
      });
    }
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      Object.values((JSON.parse(localStorage.getItem('inProgressRecipes'))))
        .forEach((element) => {
          if (Object.keys(element)[0] === params.id) {
            setStartButton(false);
            setContinueButton(true);
          }
        });
    }
  }, []);

  useEffect(() => {
    if (recipe.meals) {
      setReceita(recipe.meals[0]);
      setType(['Meal', 'meals']);
      setSugesType(['drinks', 'Drink']);
    } else if (recipe.drinks) {
      setReceita(recipe.drinks[0]);
      setType(['Drink', 'drinks']);
      setSugesType(['meals', 'Meal']);
    }
  }, [recipe]);

  useEffect(() => {
    setIngredientes(Object.keys(receita)
      .filter((key) => key.includes('Ingredient'))
      .reduce((cur, key) => Object.assign(cur, { [key]: receita[key] }), []));
    setMedidas(Object.keys(receita)
      .filter((key) => key.includes('Measure'))
      .reduce((cur, key) => Object.assign(cur, { [key]: receita[key] }), []));
  }, [receita]);

  return (
    <main>

      {/* <Header pages isSearch={ false }>
        <h1>Recipes Details</h1>
      </Header> */}
      {loadingApi ? <h1>Loading</h1>
        : (
          <>
            <img
              data-testid="recipe-photo"
              src={ receita[`str${type[0]}Thumb`] }
              alt={ receita[`str${type[0]}`] }
            />
            <h1 data-testid="recipe-title">{receita[`str${type[0]}`]}</h1>
            {(type[0] === 'Meal')
              && <p data-testid="recipe-category">{receita.strCategory}</p>}
            {(type[0] === 'Drink')
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
            <Carousel>
              <Carousel.Item>
                <div data-testid="0-recommendation-card">
                  <h3
                    data-testid="0-recommendation-title"
                  >
                    {sugestion[`${sugesType[0]}`]
                    && (sugestion[`${sugesType[0]}`])[0][`str${sugesType[1]}`]}

                  </h3>
                </div>
                <div data-testid="1-recommendation-card">
                  <h3
                    data-testid="1-recommendation-title"
                  >
                    {sugestion[`${sugesType[0]}`]
                    && (sugestion[`${sugesType[0]}`])[1][`str${sugesType[1]}`]}

                  </h3>
                </div>
                {' '}

              </Carousel.Item>
              <Carousel.Item>
                <div data-testid="2-recommendation-card">
                  <h3
                    data-testid="2-recommendation-title"
                  >
                    {sugestion[`${sugesType[0]}`]
                    && (sugestion[`${sugesType[0]}`])[2][`str${sugesType[1]}`]}

                  </h3>
                </div>
                <div data-testid="3-recommendation-card">
                  <h3
                    data-testid="3-recommendation-title"
                  >
                    {sugestion[`${sugesType[0]}`]
                    && (sugestion[`${sugesType[0]}`])[3][`str${sugesType[1]}`]}

                  </h3>
                </div>
                {' '}

              </Carousel.Item>
              {' '}
              <Carousel.Item>
                <div data-testid="4-recommendation-card">
                  <h3
                    data-testid="4-recommendation-title"
                  >
                    {sugestion[`${sugesType[0]}`]
                    && (sugestion[`${sugesType[0]}`])[4][`str${sugesType[1]}`]}

                  </h3>
                </div>
                <div data-testid="5-recommendation-card">
                  <h3
                    data-testid="5-recommendation-title"
                  >
                    {sugestion[`${sugesType[0]}`]
                    && (sugestion[`${sugesType[0]}`])[5][`str${sugesType[1]}`]}

                  </h3>
                </div>
                {' '}

              </Carousel.Item>

            </Carousel>
            {startButton
              && (
                <Link to={ `${params.id}/in-progress` }>
                  <button
                    type="button"
                    data-testid="start-recipe-btn"
                    style={ { position: 'fixed',
                      bottom: '0px' } }
                  >
                    Start Recipe
                  </button>

                </Link>
              )}
            {continueButton
                && (
                  <button
                    type="button"
                    data-testid="start-recipe-btn"
                    style={ { position: 'fixed',
                      bottom: '0px' } }
                  >
                    Continue Recipe

                  </button>)}
          </>
        )}
    </main>
  );
}

const mapStateToProps = (state) => ({
  sugestion: state.mealsReducer.recipes,
  recipe: state.mealsReducer.recipe,
  loadingApi: state.mealsReducer.loadingApi,
});

RecipesDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  recipe: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
  sugestion: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
  loadingApi: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RecipesDetails);
