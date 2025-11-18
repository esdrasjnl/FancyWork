import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const httpClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000
});

// Interceptor: añade token si existe
httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default httpClient;
