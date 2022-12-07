import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Recipes from '../pages/Recipes';
import { renderWithRouterAndRedux } from './RenderWithL';

it('testa a se os inputs estão na tela', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = await screen.findByTestId('search-input');
  const inputIng = await screen.findByTestId('ingredient-search-radio');
  const inputName = await screen.findByTestId('name-search-radio');
  const inputFL = await screen.findByTestId('first-letter-search-radio');

  expect(searchInput).toBeInTheDocument();
  expect(inputIng).toBeInTheDocument();
  expect(inputName).toBeInTheDocument();
  expect(inputFL).toBeInTheDocument();
});

it('testa a se os inputs é alterado', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'teste');
  console.log(searchInput);
  expect(searchInput).toHaveValue('teste');
});

it('testa a se os valor do input radio', async () => {
  const { history, store } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'a');
  console.log(searchInput);
  expect(searchInput).toHaveValue('a');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const valueRadio = store.getState().selectedReducer.inputSelected;
  expect(valueRadio).toBe('first-letter');

  const radioIng = screen.getByRole('radio', { name: /ingredient/i });
  userEvent.click(radioIng);

  const valueRadio1 = store.getState().selectedReducer.inputSelected;
  expect(valueRadio1).toBe('ingredient');

  const radioName = screen.getByRole('radio', { name: /name/i });
  userEvent.click(radioName);

  const valueRadio2 = store.getState().selectedReducer.inputSelected;
  expect(valueRadio2).toBe('name');
});

it('testa lengthMeals', async () => {
  const { history, store } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'a');
  console.log(searchInput);
  expect(searchInput).toHaveValue('a');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  await waitFor(() => {
    const MealStore = store.getState().mealsReducer.lengthMeals;
    expect(MealStore).toEqual(4);
  });
});

it('testa name a', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'rice');
  console.log(searchInput);
  expect(searchInput).toHaveValue('rice');

  const radioName = screen.getByRole('radio', { name: /name/i });
  userEvent.click(radioName);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const images = await screen.findAllByRole('img');
  expect(images).toHaveLength(2);
});

it('testa ingredient', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'chicken');
  console.log(searchInput);
  expect(searchInput).toHaveValue('chicken');

  const radioIng = screen.getByRole('radio', { name: /ingredient/i });
  userEvent.click(radioIng);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Brown Stew Chicken');
  expect(text).toBeInTheDocument();
});

it('testa fl', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'a');
  console.log(searchInput);
  expect(searchInput).toHaveValue('a');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Apple Frangipan Tart');
  expect(text).toBeInTheDocument();
});

it('testa fl2', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'aa');
  console.log(searchInput);
  expect(searchInput).toHaveValue('aa');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Your search must have only 1 (one) character');
  expect(text).toBeInTheDocument();
});

it('testa alert', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'z');
  console.log(searchInput);
  expect(searchInput).toHaveValue('z');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Sorry, we haven\'t found any recipes for these filters.');
  expect(text).toBeInTheDocument();
});

it('testa name', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'Arrabiata');
  console.log(searchInput);
  expect(searchInput).toHaveValue('Arrabiata');

  const radioName = screen.getByRole('radio', { name: /name/i });
  userEvent.click(radioName);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Spicy Arrabiata Penne');
  expect(text).toBeInTheDocument();
});

it('testa ingredient drinks', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'vodka');
  console.log(searchInput);
  expect(searchInput).toHaveValue('vodka');

  const radioIng = screen.getByRole('radio', { name: /ingredient/i });
  userEvent.click(radioIng);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('155 Belmont');
  expect(text).toBeInTheDocument();
});

it('testa name drinks', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'vodka');
  console.log(searchInput);
  expect(searchInput).toHaveValue('vodka');

  const radioName = screen.getByRole('radio', { name: /name/i });
  userEvent.click(radioName);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Long vodka');
  expect(text).toBeInTheDocument();
});

it('testa fl', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'a');
  console.log(searchInput);
  expect(searchInput).toHaveValue('a');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('A1');
  expect(text).toBeInTheDocument();
});

it('testa fl2 drinks', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'aa');
  console.log(searchInput);
  expect(searchInput).toHaveValue('aa');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Your search must have only 1 (one) character');
  expect(text).toBeInTheDocument();
});

it('testa alert drinks', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'x');
  console.log(searchInput);
  expect(searchInput).toHaveValue('x');

  const radioFL = screen.getByRole('radio', { name: /first letter/i });
  userEvent.click(radioFL);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Sorry, we haven\'t found any recipes for these filters.');
  expect(text).toBeInTheDocument();
});

it('testa name', async () => {
  const { history } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnSearch = await screen.findByRole('button', { name: /ícone de busca/i });
  expect(btnSearch).toBeInTheDocument();

  userEvent.click(btnSearch);

  const searchInput = screen.getByRole('textbox');
  userEvent.click(searchInput);
  userEvent.type(searchInput, 'Aquamarine');
  console.log(searchInput);
  expect(searchInput).toHaveValue('Aquamarine');

  const radioName = screen.getByRole('radio', { name: /name/i });
  userEvent.click(radioName);

  const findBtn = screen.getByRole('button', { name: /search/i });
  userEvent.click(findBtn);

  const text = await screen.findByText('Aquamarine');
  expect(text).toBeInTheDocument();
});
