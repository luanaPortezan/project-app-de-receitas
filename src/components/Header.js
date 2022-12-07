import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// import Footer from '../pages/Footer';
// import { inputSearchValue } from '../redux/actions/searchActions';
import '../styles/Header.css';
import SearchBar from './SearchBar';

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
      <div className="search">
        {search && <SearchBar />}
      </div>

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
