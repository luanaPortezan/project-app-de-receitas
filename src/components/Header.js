import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageName, history }) {
  return (
    <header>
      <h1
        data-testid="page-title"
        >
        {pageName}
        {' '}
      </h1>

      <img
        src={ profileIcon }
        data-testid="profile-top-btn"
        alt="Ícone de Perfil"
      />

      <img
        src={ searchIcon }
        data-testid="search-top-btn"
        alt="Ícone de Perfil de busca"
      />

      <button
        type="button"
        onClick={ () => { history.push('/profile'); } }
      ></button>
    </header>
  );
}
Header.propTypes = {
  pageName: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  })
}.isRequired;

export default Header;