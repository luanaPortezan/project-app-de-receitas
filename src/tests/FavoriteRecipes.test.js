import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import doneRecipes from './helpers/doneRecipes';
import { renderWithRouterAndRedux } from './helpers/RenderWith';

Object.assign(navigator, {
  clipboard: {
    writeText: () => { },
  },
});
describe('Testa favoriteRecipes', () => {
  const favoriteRecipes = '/favorite-recipes';

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Ve', () => {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(doneRecipes),
    );
    renderWithRouterAndRedux(<App />, { initialEntries: [favoriteRecipes] });

    const text = screen.getByRole('heading', {
      name: /name: gg/i,
    });

    const sushi = screen.getByRole('heading', {
      name: /name: sushi/i,
    });

    const bm = screen.getByRole('heading', {
      name: /name: big mac/i,
    });

    const btnD = screen.getByRole('button', {
      name: /drinks/i,
    });

    expect(text).toBeInTheDocument();
    expect(sushi).toBeInTheDocument();
    expect(bm).toBeInTheDocument();
    expect(btnD).toBeInTheDocument();

    userEvent.click(buttonDrinks);

    expect(text).toBeDefined();
    expect(bm).not.toBeInTheDocument();
  });

  it(' filter todos', async () => {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(doneRecipes),
    );
    renderWithRouterAndRedux(<App />, { initialEntries: [favoriteRecipes] });

    const txt = screen.queryByRole('heading', {
      name: /name: gg/i,
    });

    const sushi = screen.getByRole('heading', {
      name: /name: sushi/i,
    });

    const bm = screen.queryByRole('heading', {
      name: /name: big mac/i,
    });

    const btnM = screen.getByRole('button', {
      name: /meals/i,
    });

    expect(txt).toBeDefined();
    expect(sushi).toBeInTheDocument();
    expect(bm).toBeInTheDocument();
    expect(btnM).toBeDefined();

    userEvent.click(btnM);

    const txtt = screen.queryByRole('heading', {
      name: /name: gg/i,
    });

    expect(bm).toBeDefined();
    expect(sushi).toBeDefined();
    expect(txtt).not.toBeInTheDocument();

    const btnA = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(btnA);

    expect(bm).toBeDefined();
    expect(sushi).toBeDefined();
    expect(txt).toBeDefined();
  });

  it('Verifica se desfavorita', async () => {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(doneRecipes),
    );
    renderWithRouterAndRedux(<App />, { initialEntries: [favoriteRecipes] });

    const gg = screen.queryByRole('heading', {
      name: /name: gg/i,
    });

    expect(gg).toBeDefined();

    const buttonDisfavor = screen.getByTestId('0-disfavor');

    userEvent.click(buttonDisfavor);
  });

  it('s', async () => {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(doneRecipes),
    );
    renderWithRouterAndRedux(<App />, { initialEntries: [favoriteRecipes] });

    const txt = screen.queryByRole('heading', {
      name: /name: gg/i,
    });

    const sushi = screen.getByRole('heading', {
      name: /name: sushi/i,
    });

    const bm = screen.queryByRole('heading', {
      name: /name: big mac/i,
    });

    const btnM = screen.getByRole('button', {
      name: /meals/i,
    });

    expect(txt).toBeDefined();
    expect(sushi).toBeInTheDocument();
    expect(bm).toBeInTheDocument();
    expect(btnM).toBeDefined();

    userEvent.click(btnM);

    const txtt = screen.queryByRole('heading', {
      name: /name: gg/i,
    });

    expect(bm).toBeDefined();
    expect(sushi).toBeDefined();
    expect(txtt).not.toBeInTheDocument();
  });

  it('Verifica copy link', async () => {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(doneRecipes),
    );
    jest.spyOn(navigator.clipboard, 'writeText');
    renderWithRouterAndRedux(<App />, { initialEntries: [favoriteRecipes] });

    const a = screen.getByTestId('1-horizontal-share-btn');
    userEvent.click(a);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('http://localhost:3000/drinks/15997');

    const txt = screen.findByText(/Link copied!/i);

    expect(txt).toBeDefined();

    setTimeout(() => {
      expect(txt).not.toBeDefined();
    }, 3000);
  });
});
