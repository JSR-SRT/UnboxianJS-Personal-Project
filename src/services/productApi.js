import api from "./api";

// Fetch all products (ใช้ axios และไม่ต้อง authentication)
export const fetchProducts = async (category) => {
  try {
    const endpoint = category ? `/products?category=${category}` : "/products";
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Fetch products error:", error);
    throw error;
  }
};

// Fetch product by ID (ใช้ axios และไม่ต้อง authentication)
export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Fetch product by ID error:", error);
    throw error;
  }
};

// Search products (ใช้ axios และไม่ต้อง authentication)
export const searchProducts = async (query) => {
  try {
    const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error("Search products error:", error);
    throw error;
  }
};
