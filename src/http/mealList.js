const url = `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/meals.json`;

export const getMeals = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
