import React from 'react';

class DoneRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      state: 0,
    };
  }

  componentDidMount() {

  }

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
        <p data-testid="${index}-horizontal-top-text">Categoria da Receita</p>
        <h5 data-testid="${index}-horizontal-name">Nome da Receita</h5>
        <p data-testid="${index}-horizontal-done-date">Horario da receita</p>
        <span data-testid="${index}-horizontal-share-btn">Compartilhar</span>
      </div>
    );
  }
}

export default DoneRecipes;
