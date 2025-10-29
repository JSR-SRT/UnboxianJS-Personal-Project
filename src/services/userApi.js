import api from "./api";

// Get User Profile
export const getUserProfile = async () => {
  const response = await api.get("/user/profile");
  return response.data;
};

// Update User Profile
export const updateUserProfile = async (profileData) => {
  const response = await api.put("/user/update", profileData);
  return response.data;
};

// Delete User Profile
export const deleteUserProfile = async () => {
  const response = await api.delete("/user/delete");
  return response.data;
};