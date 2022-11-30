import React from 'react';

class FavoriteRecipes extends React.Component {
  render() {
    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-meal-btn">Meals</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        <img
          src="teste.com"
          alt="Imagem da Receita"
          data-testid="${index}-horizontal-image"
        />

      </div>
    );
  }
}

export default FavoriteRecipes;
