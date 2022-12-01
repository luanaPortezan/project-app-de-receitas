export const MEALS_INFO = 'MEALS_INFO';

export const mealsInfo = (lengthMeals, meals) => ({
  type: MEALS_INFO,
  lengthMeals,
  meals,
});
