const fetchInProgress = async (meals, id) => {
  const endpoint = meals ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const resposta = await fetch(endpoint);
  const data = await resposta.json();
  return data[meals ? 'meals' : 'drinks'][0];
};
export default fetchInProgress;
