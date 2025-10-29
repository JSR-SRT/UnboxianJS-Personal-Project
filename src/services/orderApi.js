import api from "./api";

// Create Order
export const createOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};

// Get All User Orders
export const getUserOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

// Get Order by ID
export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

// Cancel Order
export const cancelOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};