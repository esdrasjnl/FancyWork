import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const register = async (formData) => {
    const res = await axios.post(
      `${API_URL}/auth/register`,
      formData
    );

    // Si el backend devuelve token
    if (res.data.token) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    }

    setUser(res.data.user || null);
    return res.data;
  };

  const login = async (credentials) => {
    const res = await axios.post(
      `${API_URL}/auth/login`,
      credentials
    );

    setToken(res.data.token);
    setUser(res.data.user);
    localStorage.setItem("token", res.data.token);

    return res.data;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
