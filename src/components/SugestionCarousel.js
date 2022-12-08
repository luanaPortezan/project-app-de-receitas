import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

function SugestionCarousel(props) {
  const { sugestion, location } = props;
  const [sugesType, setSugesType] = useState([]);

  useEffect(() => {
    if (location.pathname.includes('/meals/')) {
      setSugesType(['drinks', 'Drink']);
    } else {
      setSugesType(['meals', 'Meal']);
    }
  }, [sugestion]);
  return (

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
  );
}
const mapStateToProps = (state) => ({
  sugestion: state.mealsReducer.recipes,
});

SugestionCarousel.propTypes = {
  sugestion: PropTypes.shape({
    meals: PropTypes.arrayOf,
    drinks: PropTypes.arrayOf }).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default connect(mapStateToProps)(SugestionCarousel);
