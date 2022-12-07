export async function fetchByIngredient(ingredient) {
  const END_POINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
}

export const fetchByName = async (name) => {
  const END_POINT = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
};

export const fetchByFirstLetter = async (firstLetter) => {
  const END_POINT = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
};

export const fetchByIngredientD = async (ingredient) => {
  const END_POINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
};

export const fetchByNameD = async (name) => {
  const END_POINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
};

export const fetchByFirstLetterD = async (firstLetter) => {
  const END_POINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
};
