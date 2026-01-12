import authApi from "../api/auth.api";

export const authService = {
  register: async (data) => {
    const response = await authApi.post("/register", data);
    return response.data;
  },

  login: async (data) => {
    const response = await authApi.post("/login", data);
    return response.data;
  }
};
