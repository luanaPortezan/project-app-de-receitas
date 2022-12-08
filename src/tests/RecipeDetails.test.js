import { screen, act } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './RenderWithL';
import { recipes, drinks, singleMeal, singleDrink } from './helpers/mocksExporter';

const unmockedFetch = global.fetch;
const mealsLink = '/meals/52977';
const startRecipeBtn = 'start-recipe-btn';
const recipePhoto = 'recipe-photo';
const recipeTitle = 'recipe-title';
const favoriteBtn = 'favorite-btn';

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

it('testa o arquivo RecipesDetails1', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  window.localStorage.setItem('doneRecipes', JSON.stringify([{ id: 52977 }]));
  window.localStorage.setItem('favoriteRecipes', JSON.stringify([{ id: 52977 }]));

  act(() => {
    history.push(mealsLink);
  });

  const image = await screen.findByTestId(recipePhoto);
  expect(image).toBeInTheDocument();

  const nome = await screen.findByTestId(recipeTitle);
  expect(nome).toBeInTheDocument();
});

it('testa o arquivo RecipesDetails2', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  window.localStorage.setItem('doneRecipes', JSON.stringify([{ id: 5297 }]));
  window.localStorage.setItem('favoriteRecipes', JSON.stringify([{ id: 5297 }]));

  act(() => {
    history.push(mealsLink);
  });

  const image = await screen.findByTestId(recipePhoto);
  expect(image).toBeInTheDocument();

  const nome = await screen.findByTestId(recipeTitle);
  expect(nome).toBeInTheDocument();
});

it('testa o arquivo RecipesDetails3', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  window.localStorage.setItem('inProgressRecipes', JSON.stringify({ drinks: { 13501: [] } }));

  act(() => {
    history.push('/drinks/13501');
  });

  const image = await screen.findByTestId(recipePhoto);
  expect(image).toBeInTheDocument();
  const nome = await screen.findByTestId(recipeTitle);
  expect(nome).toBeInTheDocument();
  const startButton = await screen.findByTestId(startRecipeBtn);
  expect(startButton).toBeInTheDocument();
  userEvent.click(startButton);
  const favoriteButton = await screen.findByTestId(favoriteBtn);
  userEvent.click(favoriteButton);
  setTimeout(userEvent.click(favoriteButton), 5000);
});

it('testa o arquivo RecipesDetails4', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  window.localStorage.setItem('inProgressRecipes', JSON.stringify({ drinks: { 1350: [] } }));

  act(() => {
    history.push('/drinks/13501');
  });

  const image = await screen.findByTestId(recipePhoto);
  expect(image).toBeInTheDocument();
  const nome = await screen.findByTestId(recipeTitle);
  expect(nome).toBeInTheDocument();
  const startButton = await screen.findByTestId(startRecipeBtn);
  expect(startButton).toBeInTheDocument();
  userEvent.click(startButton);
  const favoriteButton = await screen.findByTestId(favoriteBtn);
  userEvent.click(favoriteButton);
  setTimeout(userEvent.click(favoriteButton), 5000);
});

it('testa o arquivo RecipesDetails5', async () => {
  window.document.execCommand = jest.fn(() => true);
  const { history } = renderWithRouterAndRedux(<App />);
  window.localStorage.setItem('inProgressRecipes', JSON.stringify({ meals: { 52977: [], 13501: [] } }));

  act(() => {
    history.push(mealsLink);
  });

  const image = await screen.findByTestId(recipePhoto);
  expect(image).toBeInTheDocument();
  const nome = await screen.findByTestId(recipeTitle);
  expect(nome).toBeInTheDocument();
  const startButton = await screen.findByTestId(startRecipeBtn);
  expect(startButton).toBeInTheDocument();
  userEvent.click(startButton);
  const favoriteButton = await screen.findByTestId(favoriteBtn);
  userEvent.click(favoriteButton);
  setTimeout(userEvent.click(favoriteButton), 5000);

  const shareButton = await screen.findByTestId('share-btn');
  userEvent.click(shareButton);
});
