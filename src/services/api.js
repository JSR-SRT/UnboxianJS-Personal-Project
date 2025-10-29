import axios from "axios";

// ใช้ VITE_API_URL ทั้ง dev และ prod
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3030";

const api = axios.create({
  baseURL,
  withCredentials: true, // ส่ง cookies (JWT) ไปด้วย
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor สำหรับจัดการ errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired หรือไม่ valid
      console.error("Unauthorized. Please login again.");
    }
    return Promise.reject(error);
  }
);

export default api;