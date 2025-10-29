import api from "./api";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3030";

// Fetch all products (ใช้ axios)
export const fetchProducts = async (category) => {
  const endpoint = category ? `/products?category=${category}` : "/products";
  const response = await api.get(endpoint);
  return response.data;
};

// Fetch product by ID (ใช้ axios)
export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Search products (ใช้ fetch เพราะไม่ต้องส่ง credentials)
export const searchProducts = async (query) => {
  const res = await fetch(
    `${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search products");
  return res.json();
};
