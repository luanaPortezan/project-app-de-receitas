export const DRINKS_INFO = 'DRINKS_INFO';

export const drinksInfo = (lengthDrinks, drinks) => ({
  type: DRINKS_INFO,
  lengthDrinks,
  drinks,
});
