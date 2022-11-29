import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageName, history }) {
  const [search, setSearch] = useState(false);

  return (
    <header>
      <h1
        data-testid="page-title"
      >
        {pageName}
        {' '}
      </h1>

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

    </header>
  );
}
Header.propTypes = {
  pageName: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Header;
