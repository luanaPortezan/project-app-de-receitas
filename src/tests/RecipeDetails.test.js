import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { renderWithRouterAndRedux } from './RenderWithL';
import { recipes, drinks, singleMeal, singleDrink } from './helpers/mocksExporter';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = (input) => {
    switch (input) {
    case 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977':
      return (Promise.resolve({
        json: () => Promise.resolve(singleMeal),
      }));
    case 'https://www.themealdb.com/api/json/v1/1/search.php?s=':
      return (Promise.resolve({
        json: () => Promise.resolve(recipes),
      }));
    case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=':
      return (Promise.resolve({
        json: () => Promise.resolve(drinks),
      }));
    case 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13501':
      return (Promise.resolve({
        json: () => Promise.resolve(singleDrink), // mudar
      }));
    default:
      return null;
    }
  };
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it('testa o arquivo RecipesDetails', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  act(() => {
    history.push({ pathname: '/meals/52977' });
  });
  const image = await screen.findByRole('img');
});

it('testa o arquivo RecipesDetails', async () => {
  renderWithRouterAndRedux(<RecipesDetails />, { initialEntries: ['drinks/13501'] });
  const image = await screen.findByRole('img');
});
