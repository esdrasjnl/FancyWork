import httpClient from "../api/httpClient";

export const userService = {
  register: (payload) => httpClient.post("/users", payload),
  login: (payload) => httpClient.post("/users/login", payload),
  getProfile: () => httpClient.get("/users/profile")
};
