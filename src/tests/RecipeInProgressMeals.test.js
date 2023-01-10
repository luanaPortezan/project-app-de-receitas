// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithRouter } from './RenderWithL';
// import RecipeDetails from '../pages/RecipeDetails';
// import RecipeInProgressMeals from '../components/RecipeInProgressMeals';

// describe('Testes da page RecipeDetailsMeals', () => {
//  it('Testa os componentes do RecipeDetails', async () => {
//    const { history } = renderWithRouter(<RecipeDetails />);
//    history.push('/meals/52977');
//    const headingName = await screen.findByRole('heading', { name: 'RecipeDetails' });
//    expect(headingName).toBeInTheDocument();
//    // expect(await screen.findByRole('heading', { name: 'RecipeDetails' })).toBeInTheDocument();
//    const shareButton = await screen.findByTestId('share-btn');
//    userEvent.click(shareButton);
//    // expect(screen.getByTestId('share-btn')).toBeInTheDocument();

//    // expect(screen.getByTestId('favorite-btn')).toBeInTheDocument();
//    const favoriteButton = await screen.findByTestId('favorite-Button');
//    userEvent.click(favoriteButton);
//    setTimeout(userEvent.click(favoriteButton), 5000);

//    // expect(screen.getByTestId('start-recipe-btn')).toBeInTheDocument();
//    const startButton = await screen.findByTestId('start-Recipe-Btn');
//    expect(startButton).toBeInTheDocument();
//    userEvent.click(startButton);
//  });

//  it('Testa os componentes da página', async () => {
//    global.fetch = jest.fn(() => Promise.resolve({
//      json: () => Promise.resolve(meals),
//    }));
//    const { history } = renderWithRouter(<RecipeInProgressMeals />);
//    history.push('/meals/52977');

//    const recipePhoto = await screen.findByTestId('recipe-photo');
//    expect(recipePhoto).toBeInTheDocument();
//    const recipeTitle = await screen.findByTestId('recipe-title');
//    expect(recipeTitle).toBeInTheDocument();
//    const recipeCategory = await screen.findByTestId('recipe-category');
//    expect(recipeCategory).toBeInTheDocument();
//    // if (for i = 0; i <= 7; i += 1) {
//    //  expect(screen.getByTestId(`${i}-ingredient-name-and-measure`)).toBeInTheDocument();
//    // }
//    const instructions = screen.getByTestId('instructions');
//    expect(instructions).toBeInTheDocument();

//    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
//    userEvent.click(startRecipeBtn);
//    expect(history.location.pathname).toBe('/meals/52977/in-progress');
//  });
// });
