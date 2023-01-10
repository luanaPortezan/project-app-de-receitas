/* eslint-disable import/no-unresolved */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/RenderWith';
import App from '../App';

const mealsLink = '/meals/52977/in-progress';
const mealsProgress = createTransport({ 52977: ['Corba'] });
// ['Lentils', 'Onion', 'Onion', 'Carrots', 'Tomato Puree', 'Cumin', 'Paprika', 'Mint', 'Thyme', 'Red Pepper Flakes', 'Black Pepper', 'Vegetable Stock', 'Water', 'Sea Salt'],

jest.mock('mealsLink');
// const mealsMock = require('mealsLink');

const mealsMocado = jest.fn().mockReturnValue('mealsLink');

mealsProgress.createTransport.mockReturnValue({ mealsLink: mealsMock });

beforeEach(() => {
  mealsMock.mockClear();
  mealsProgress.createTransport.mockClear();
});

describe('Testar a página RecipeInProgress', () => {
  it('Testa os componentes do RecipeDetails', async () => {
    const sut = makeSut();
    mealsMock.mockReturnValue('mealsLink');
    const result = await sut.send('52977');
    expect(result.value).toBe('Corba');
    const recipePhoto = await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();
    const recipeTitle = await screen.findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
    const recipeCategory = await screen.findByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
    userEvent.click(startRecipeBtn);
    // expect(history.location.pathname).toBe('/meals/52977/in-progress');
  });
});

// const drinksLink = '/drinks/178319/in-progress';
jest.clearAllMocks();
// const mealsMocado = require('mealsLink');

// const mealsMock = jest.fn().mockReturnValue('mealsMocado');
mealsMocado.mockReturnValue({ mealsLink: mealsProgress });

beforeEach(() => {
  mealsMocado.mockClear();
  mealsMock.mockClear();
});

describe('Testar a página RecipeInProgress', () => {
  localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: { 52977: ['Corba'],
  } }));
  // localStorage.setItem('inProgressRecipes', JSON.stringify({ drinksLink }));

  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeAll(() => {
    it('Testa se os elementos renderizam corretamente', async () => {
      const { history } = renderWithRouter(
        // <AppProvider>
        <App />,
        {/* </AppProvider>, */},
      );

      act(() => {
        history.push(mealsLink);
      });
      const mealsPhoto = screen.findByTestId('recipe-photo');
      waitFor(() => expect(history.location.pathname).toBe(mealsPhoto));
      waitFor(() => expect(mealsPhoto).toBeInTheDocument());
      // expect(recipePhoto).toBeInTheDocument();
      const mealsTitle = screen.findByTestId('recipe-title');
      expect(mealsTitle).toBeInTheDocument();
      const mealsIngredient = screen.findByTestId('0-ingredient-step');
      waitFor(() => expect(mealsIngredient).toBeInTheDocument());
      const mealsInstrucao = screen.getByTestId('instructions');
      expect(mealsInstrucao).toBeInTheDocument();
    });
  });
});
