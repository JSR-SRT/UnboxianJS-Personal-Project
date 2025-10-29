import api from "./api";

// Register
export const signupUser = async ({ 
  firstname, 
  lastname, 
  email, 
  phone, 
  username, 
  password, 
  address 
}) => {
  const response = await api.post("/auth/register", {
    firstname,
    lastname,
    email,
    phone,
    username,
    password,
    address: address || "", // optional
  });
  return response.data;
};

// Login
export const loginUser = async ({ username, password, remember }) => {
  const response = await api.post("/auth/login", {
    username,
    password,
    remember: remember || false,
  });
  return response.data;
};

// Logout
export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

// Get Auth Status
export const getAuthStatus = async () => {
  const response = await api.get("/auth/status");
  return response.data;
};

// Get User Profile
export const getUserProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};

// Refresh Token
export const refreshToken = async () => {
  const response = await api.post("/auth/token");
  return response.data;
};