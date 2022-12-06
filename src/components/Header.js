import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

function Header({ children, pages, isSearch }) {
  const [search, setSearch] = useState(false);

  return (
    <header className="header">
      <p data-testid="page-title">{children}</p>

      {pages && (
        <Link to="/profile">
          <img
            src={ profileIcon }
            data-testid="profile-top-btn"
            alt="Ícone de profile"
          />
        </Link>
      )}

      {isSearch && (
        <button
          type="button"
          onClick={ () => { setSearch(!search); } }
        >
          <img
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="Ícone de busca"
          />
        </button>
      )}

      {search && <SearchBar />}

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
