import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './RenderWithL';
import Footer from '../pages/Footer';
import App from '../App';

describe('Verifica se a página Footer os componentes', () => {
  it('Verificar se é direcionado para a página Footer', () => {
    render(<Footer />);
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/footer'));
    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(button);
  });

  it('Verifica se é redirecionado para a página Drink', () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/drink'));

    const pageDrink = screen.getByTestId('page-title');
    expect(pageDrink).toHaveTextContent('Drinks');

    const imgDrink = screen.getByText('drinkIcon');
    expect(imgDrink).toBeInTheDocument();

    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    expect(drinkIcon).toBeInTheDocument();

    userEvent.click(drinkIcon);
  });

  it('Verifica se é redirecionado para a página Meal', () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/meal'));

    const pageMeals = screen.getByTestId('page-title');
    expect(pageMeals).toHaveTextContent('Meals');

    const imgMeal = screen.getByTestId('mealIcon');
    expect(imgMeal).toBeInTheDocument();

    const mealIcon = screen.getByTestId('meals-bottom-btn');
    expect(mealIcon).toBeInTheDocument();

    userEvent.click(mealIcon);
  });
});
