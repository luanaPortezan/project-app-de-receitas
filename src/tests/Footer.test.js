// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithRouter } from './RenderWithL';
// import Footer from '../pages/Footer';
// import App from '../App';

// const pgTitleId = 'tile-page';
// const iconkDrink = drinkIcon;
// describe('Verifica a página Footer os componentes', () => {
//  it('Verificar se é direcionado para a página Footer', () => {
//    render(<Footer />);
//    const { history } = renderWithRouter(<App />);
//    act(() => history.push('/footer'));

//    const inputEmail = screen.getByPlaceholderText('Email');
//    expect(inputEmail).toBeInTheDocument();

//    const inputSenha = screen.getByPlaceholderText('Senha');
//    expect(inputSenha).toBeInTheDocument();

//    const button = screen.getByRole('button', { name: /entrar/i });
//    userEvent.click(button);
//  });

//  it('Verifica se é redirecionado para a página Drinks', () => {
//    const { history } = renderWithRouter(<App />);
//    act(() => history.push('/drink'));

//    const pageDrink1 = screen.getByTestId(pgTitleId);
//    expect(pageDrink1).toHaveTextContent('Drinks');
//    userEvent.click(iconkDrink);

//    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
//    expect(drinkIcon).toBeInTheDocument();

//    const imgDrink = screen.getByTestId('drinkIcon');
//    expect(imgDrink).toBeInTheDocument();

//    const linkApp = screen.getByText(/Página de receitas!/i);
//    expect(linkApp).toBeInTheDocument();
//  });

//  it('Verifica se é redirecionado para a página Meals', () => {
//    const { history } = renderWithRouter(<App />);
//    act(() => history.push('/meal'));

//    const pageMeals = screen.getByTestId('page-title');
//    expect(pageMeals).toHaveTextContent('Meals');

//    const imgMeal = screen.getByTestId('mealIcon');
//    expect(imgMeal).toBeInTheDocument();

//    const mealIcon = screen.getByTestId('meals-bottom-btn');
//    expect(mealIcon).toBeInTheDocument();

//    userEvent.click(mealIcon);
//  });

//  it('Verifica se é redirecionado para a página Profile', () => {
//    const { history } = renderWithRouter(<App />);
//    act(() => history.push('/profile'));

//    const pageProfile = screen.getByTestId('page-title');
//    expect(pageProfile).toHaveTextContent('Profile');

//    const imgMeal = screen.getByTestId('mealIcon');
//    const mealIcon = screen.getByTestId('meals-bottom-btn');
//    expect(imgMeal).toBeInTheDocument();
//    expect(mealIcon).toBeInTheDocument();

//    const imgDrink = screen.getByText('drinkIcon');
//    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
//    expect(imgDrink).toBeInTheDocument();
//    expect(drinkIcon).toBeInTheDocument();
//  });
// });
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './RenderWithL';
import Footer from '../pages/Footer';
import App from '../App';

const pgTitleId = 'tile-page';
const iconkDrink = drinkIcon;

describe('Verifica se a página Footer os componentes', () => {
  it('Verificar se é direcionado para a página Footer', () => {
    render(<Footer />);
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/footer'));
    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(button);
  });
  it('Verifica se é redirecionado para a página Drinks', () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/drink'));

    const pageDrink = screen.getByTestId(pgTitleId);
    expect(pageDrink).toHaveTextContent('Drinks');

    userEvent.click(iconkDrink );

    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    expect(drinkIcon).toBeInTheDocument();

    const imgDrink = screen.getByTestId('drinkIcon');
    expect(imgDrink).toBeInTheDocument();

    const linkApp = screen.getByText(/Página de receitas!/i);
    expect(linkApp).toBeInTheDocument();
  });

  it('Verifica se é redirecionado para a página Meals', () => {
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

  it('Verifica se é redirecionado para a página Profile', () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/profile'));

    const pageProfile = screen.getByTestId('page-title');
    expect(pageProfile).toHaveTextContent('Profile');

    const imgMeal = screen.getByTestId('mealIcon');
    const mealIcon = screen.getByTestId('meals-bottom-btn');
    expect(imgMeal).toBeInTheDocument();
    expect(mealIcon).toBeInTheDocument();

    const imgDrink = screen.getByText('drinkIcon');
    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    expect(imgDrink).toBeInTheDocument();
    expect(drinkIcon).toBeInTheDocument();
  });
});
