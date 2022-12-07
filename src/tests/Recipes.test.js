import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Recipes from '../pages/Recipes';
import { renderWithRouterAndRedux } from './RenderWithL';

const categories = {
  meals: [
    {
      strCategory: 'Beef',
    },
    {
      strCategory: 'Breakfast',
    },
    {
      strCategory: 'Chicken',
    },
    {
      strCategory: 'Dessert',
    },
    {
      strCategory: 'Goat',
    },
    {
      strCategory: 'Lamb',
    },
    {
      strCategory: 'Miscellaneous',
    },
    {
      strCategory: 'Pasta',
    },
    {
      strCategory: 'Pork',
    },
    {
      strCategory: 'Seafood',
    },
    {
      strCategory: 'Side',
    },
    {
      strCategory: 'Starter',
    },
    {
      strCategory: 'Vegan',
    },
    {
      strCategory: 'Vegetarian',
    },
  ],
};
const categoriesd = {
  drinks: [
    {
      strCategory: 'Beef',
    },
    {
      strCategory: 'Breakfast',
    },
    {
      strCategory: 'Chicken',
    },
    {
      strCategory: 'Dessert',
    },
    {
      strCategory: 'Goat',
    },
    {
      strCategory: 'Lamb',
    },
    {
      strCategory: 'Miscellaneous',
    },
    {
      strCategory: 'Pasta',
    },
    {
      strCategory: 'Pork',
    },
    {
      strCategory: 'Seafood',
    },
    {
      strCategory: 'Side',
    },
    {
      strCategory: 'Starter',
    },
    {
      strCategory: 'Vegan',
    },
    {
      strCategory: 'Vegetarian',
    },
  ],
};
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

const recipesChicken = {
  meals: [
    {
      strMeal: 'Ayam Percik',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
      idMeal: '53050',
    }, {
      strMeal: 'Brown Stew Chicken',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
      idMeal: '52940',
    }, {
      strMeal: 'Chick-Fil-A Sandwich',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
      idMeal: '53016',
    }, {
      strMeal: 'Chicken & mushroom Hotpot',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg',
      idMeal: '52846',
    }, {
      strMeal: 'Chicken Alfredo Primavera',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
      idMeal: '52796',
    }, {
      strMeal: 'Chicken Basquaise',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
      idMeal: '52934',
    }, {
      strMeal: 'Chicken Congee',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
      idMeal: '52956',
    }, {
      strMeal: 'Chicken Couscous',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
      idMeal: '52850',
    }, {
      strMeal: 'Chicken Enchilada Casserole',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
      idMeal: '52765',
    }, {
      strMeal: 'Chicken Fajita Mac and Cheese',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
      idMeal: '52818',
    }, {
      strMeal: 'Chicken Ham and Leek Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
      idMeal: '52875',
    }, {
      strMeal: 'Chicken Handi',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
      idMeal: '52795',
    }, {
      strMeal: 'Chicken Karaage',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
      idMeal: '52831',
    }, {
      strMeal: 'Chicken Marengo',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg',
      idMeal: '52920',
    }, {
      strMeal: 'Chicken Parmentier',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg',
      idMeal: '52879',
    }, {
      strMeal: 'Chicken Quinoa Greek Salad',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg',
      idMeal: '53011',
    }, {
      strMeal: 'Coq au vin',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg',
      idMeal: '52832',
    }, {
      strMeal: 'Crock Pot Chicken Baked Tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',
      idMeal: '52830',
    }, {
      strMeal: 'French Onion Chicken with Roasted Carrots & Mashed Potatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/b5ft861583188991.jpg',
      idMeal: '52996',
    }, {
      strMeal: 'General Tso\'s Chicken',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
      idMeal: '52951',
    }, {
      strMeal: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg',
      idMeal: '52993',
    }, {
      strMeal: 'Jerk chicken with rice & peas',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg',
      idMeal: '52937',
    }, {
      strMeal: 'Katsu Chicken curry',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
      idMeal: '52820',
    }, {
      strMeal: 'Kentucky Fried Chicken',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg',
      idMeal: '52813',
    }, {
      strMeal: 'Kung Pao Chicken',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1525872624.jpg',
      idMeal: '52945',
    }, {
      strMeal: 'Nutty Chicken Curry',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg',
      idMeal: '52851',
    }, {
      strMeal: 'Pad See Ew',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg',
      idMeal: '52774',
    }, {
      strMeal: 'Piri-piri chicken and slaw',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg',
      idMeal: '53039',
    }, {
      strMeal: 'Potato Gratin with Chicken',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg',
      idMeal: '52780',
    }, {
      strMeal: 'Rappie Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg',
      idMeal: '52933',
    }, {
      strMeal: 'Rosół (Polish Chicken Soup)',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg',
      idMeal: '53020',
    }, {
      strMeal: 'Shawarma',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg',
      idMeal: '53028',
    }, {
      strMeal: 'Tandoori chicken',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
      idMeal: '52806',
    }, {
      strMeal: 'Teriyaki Chicken Casserole',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      idMeal: '52772',
    }, {
      strMeal: 'Thai Green Curry',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg',
      idMeal: '52814',
    }] };

const recipesCocoa = {
  meals: [
    {
      strDrink: 'Castillian Hot Chocolate',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
      idDrink: '12730',
    }, {
      strDrink: 'Chocolate Beverage',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg',
      idDrink: '12732',
    }, {
      strDrink: 'Chocolate Drink',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg',
      idDrink: '12734',
    }, {
      strDrink: 'Drinking Chocolate',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg',
      idDrink: '12736',
    }, {
      strDrink: 'Hot Chocolate to Die for',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg',
      idDrink: '12738',
    }, {
      strDrink: 'Microwave Hot Cocoa',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg',
      idDrink: '12744',
    }, {
      strDrink: 'Nuked Hot Chocolate',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg',
      idDrink: '12746',
    }, {
      strDrink: 'Orange Scented Hot Chocolate',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg',
      idDrink: '12748',
    }, {
      strDrink: 'Spanish chocolate',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg',
      idDrink: '12750',
    }] };

it('testa a Categoria Cocoa', async () => {
  const { history, store } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/drinks');
  });

  const btnCocoa = await screen.findByText('Chicken');
  expect(btnCocoa).toBeInTheDocument();
  userEvent.click(btnCocoa);

  const recipeMeals = store.getState().mealsReducer.recipes.drinks;
  console.log(recipeMeals);

  expect(recipeMeals).toEqual(recipesCocoa);
});

it('testa a Categoria Chicken', async () => {
  const { history, store } = renderWithRouterAndRedux(<Recipes />);
  act(() => {
    history.push('/meals');
  });

  const btnChicken = await screen.findByText('Chicken');
  expect(btnChicken).toBeInTheDocument();
  userEvent.click(btnChicken);

  const recipeMeals = store.getState().mealsReducer.recipes.meals;

  expect(recipeMeals).toEqual(recipesChicken);
});
