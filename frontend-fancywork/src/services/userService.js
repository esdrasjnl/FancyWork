import httpClient from "../api/httpClient";

export const userService = {
  
  register(data) {
    return httpClient.post("/api/users/register", data);
  },

  login(data) {
    return httpClient.post("/api/users/login", data);
  },

  getProfile() {
    return httpClient.get("/api/users/profile");
  }
};
