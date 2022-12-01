import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
// import Profile from './Profile';

function Footer() {
  // onChange={ ({ target }) => setId(target.value) }

  return (
    <div>
      <footer className="footer" data-testid="footer">
        <Link
          to="/drinks"
          // className="drinks"
          // type="button"
          // name="drinks"
          // onClick={ (e) => (name = e.target.value) }
          // onClick={ ({ target }) => setId(target.value) }
          // onClick={ handleChange }
        >
          <img
            src={ drinkIcon }
            data-testid="drinks-bottom-btn"
            alt=""
            // name="drinks"
          // value={ name }
          />
        </Link>

        <Link
          to="/meals"
          // className="meals"
          // type="button"
          // name="meals"
          // onChange={ handleChange }
        >
          <img
            src={ mealIcon }
            data-testid="meals-bottom-btn"
            alt=""
            // name="meals"
          // value={ name }
          />
        </Link>

      </footer>
    </div>
  );
}
export default Footer;
