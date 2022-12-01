import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { inputSearchValue } from '../redux/actions/searchActions';
import '../styles/Header.css';

function Header({ children, pages }) {
  const [search, setSearch] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    const verifyInput = () => {
      dispatch(inputSearchValue(inputSearch));
    };
    verifyInput();
  }, [inputSearch]);

  return (
    <header className="header">
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

      {search && <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target }) => setInputSearch(target.value) }
      />}
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
