// import React from 'react';
// import { screen } from '@testing-library/react';
// import renderWithRouter from './helpers/RenderWith';
// import App from '../App';

// const mealsLink = '/meals/52977/in-progress';
/// / const mealsProgress = { 52977: ['Corba'] };
/// / ['Lentils', 'Onion', 'Onion', 'Carrots', 'Tomato Puree', 'Cumin', 'Paprika', 'Mint', 'Thyme', 'Red Pepper Flakes', 'Black Pepper', 'Vegetable Stock', 'Water', 'Sea Salt'],

// const drinksLink = '/drinks/178319/in-progress';
/// / jest.clearAllMocks();
/// / eslint-disable-next-line import/no-unresolved
/// / const mealsMocado = require('mealsLink');

/// / const mealsMock = jest.fn().mockReturn('ok');
/// / mealsMocado.mockReturn({ mealsLink: mealsProgress });

/// / beforeEach(() => {
/// /  mealsMocado.mockClear();
/// /  mealsMock.mockClear();
/// / });

// describe('Testar a página RecipeInProgress', () => {
//  localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: { 52977: ['Corba'],
//  } }));
//  localStorage.setItem('inProgressRecipes', JSON.stringify({ drinksLink }));

//  afterEach(() => {
//    jest.resetAllMocks();
//  });

//  beforeAll(() => {
//    it('Testa se os elementos renderizam corretamente', async () => {
//      const { history } = renderWithRouter(
//        <AppProvider>
//          <App />
//        </AppProvider>,
//      );
//    });
//    act(() => {
//      history.push(mealsLink);
//    });
//    const mealsPhoto = screen.findByTestId('recipe-photo');
//    waitFor(() => expect(history.location.pathname).toBe(mealsPhoto));
//    waitFor(() => expect(mealsPhoto).toBeInTheDocument());
//    // expect(recipePhoto).toBeInTheDocument();
//    const mealsTitle = screen.findByTestId('recipe-title');
//    expect(mealsTitle).toBeInTheDocument();
//    const mealsIngredient = screen.findByTestId('0-ingredient-step');
//    waitFor(() => expect(mealsIngredient).toBeInTheDocument());
//    const mealsInstrucao = screen.getByTestId('instructions');
//    expect(mealsInstrucao).toBeInTheDocument();
//  });
// });
