const url = `dskljf/${process.env.REACT_APP_FIREBASE_DATABASE_URL}/meals.json`;

export const getMeals = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("응답을 받아오지 못했습니다.");
  }
};
