import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ children, pages }) {
  const [search, setSearch] = useState(false);
  const history = useHistory();

  return (
    <header>
      <h1
        data-testid="page-title"
      >
        {children}
        {' '}
      </h1>

      {pages && (
        <button
          type="button"
          onClick={ () => { history.push('/profile'); } }
        >
          <img
            src={ profileIcon }
            data-testid="profile-top-btn"
            alt="Ícone de Perfil"
          />
        </button>
      )}

      <button
        type="button"
        onClick={ () => { setSearch(!search); } }
      >
        <img
          src={ searchIcon }
          data-testid="search-top-btn"
          alt="Ícone de Perfil de busca"
        />
      </button>

      {search && <input type="text" data-testid="search-input" />}
      {/* falta colocar o searchBar em cima */}

    </header>
  );
}
Header.propTypes = {
  children: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Header;
