const url = `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/order.json`;

export const postOrder = async (orderData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: orderData,
    });
    if (response.status !== 200) {
      throw new Error("주문을 보내는데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("주문을 보내는데 실패했습니다.");
  }
};
