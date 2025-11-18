import httpClient from "../api/httpClient";

export const userService = {
  
  register(data) {
    return httpClient.post("/users", data);
  },

  login(data) {
    return httpClient.post("/users/login", data);
  },

  getProfile() {
    return httpClient.get("/users/profile");
  }
};
