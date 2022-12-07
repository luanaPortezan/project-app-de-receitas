import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Recipes from '../pages/Recipes';
import { renderWithRouterAndRedux } from './RenderWithL';
import { recipes, drinks, categories, categoriesd } from './helpers/mocksExporter';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = (input) => {
    switch (input) {
    case 'https://www.themealdb.com/api/json/v1/1/list.php?c=list':
      return (Promise.resolve({
        json: () => Promise.resolve(categories),
      }));
    case 'https://www.themealdb.com/api/json/v1/1/search.php?s=':
      return (Promise.resolve({
        json: () => Promise.resolve(recipes),
      }));
    case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=':
      return (Promise.resolve({
        json: () => Promise.resolve(drinks),
      }));
    case 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list':
      return (Promise.resolve({
        json: () => Promise.resolve(categoriesd),
      }));
    default:
      return null;
    }
  };
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it('testa a pagina Recipes', async () => {
  renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });
  const images = await screen.findAllByRole('img');
  expect(images).toHaveLength(12);
  const buttonBeef = await screen.findByText('Beef');
  expect(buttonBeef).toBeInTheDocument();
  userEvent.click(buttonBeef);
  userEvent.click(buttonBeef);
});
it('testa a pagina Recipes', async () => {
  renderWithRouterAndRedux(<Recipes />);
  const images = await screen.findAllByRole('img');
  expect(images).toHaveLength(12);
  const buttonBeef = await screen.findByText('Beef');
  expect(buttonBeef).toBeInTheDocument();
  userEvent.click(buttonBeef);
});
