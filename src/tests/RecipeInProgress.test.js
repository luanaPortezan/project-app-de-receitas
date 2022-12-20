import React from 'react';
import { screen, userEvent } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWith';
// import mockMealDetails from './helpers/mockMealDetails';
import RecipeInProgress from '../pages/RecipeInProgress';

describe('Testes da Página Meals', () => {
  it('Testa os componentes do RecipeDetails', () => {
    const { history } = renderWithRouter(<RecipeInProgress />);
    history.push('/meals/52977/in-progress');
    const aghaInProgress = screen.getByRole('heading', { name: 'Meals' });
    expect(aghaInProgress).toBeInTheDocument('Meals');
    expect(screen.getByTestId('share-btn')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-btn')).toBeInTheDocument();
  });
  it('Testa se contem os componentes de imagem, título, categoria', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(),
    }));
    const { history } = renderWithRouter(<RecipeInProgress />);
    history.push('/meals/52977/in-progress');
    const recipePhoto = await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();
    const recipeTitle = await screen.findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
    const recipeCategory = await screen.findByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
    for (let i = 0; i <= 2; i += 1) {
      expect(screen.getByTestId(`${i}-ingredient-step`)).toBeInTheDocument();
    }
    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
  });
});
