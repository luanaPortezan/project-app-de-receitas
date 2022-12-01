import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchRecipe } from '../redux/actions';

function RecipesDetails(props) {
  const params = useParams();
  const { dispatch, location } = props;
  useEffect(() => {
    if (location.pathname.includes('/meals/')) {
      dispatch(fetchRecipe(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`));
    } else { dispatch(fetchRecipe(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)); }
  });

  return (
    <div>
      <Header>RecipesDetails</Header>
    </div>
  );
}

RecipesDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default connect()(RecipesDetails);
