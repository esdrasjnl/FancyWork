import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  /* ================== AXIOS DEFAULT ================== */
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  /* ================== RESTORE SESSION ================== */
  useEffect(() => {
    const restoreSession = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/auth/profile`);
        setUser(res.data.user);
      } catch (err) {
        logout(); // token inválido
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, [token]);

  /* ================== REGISTER ================== */
  const register = async (formData) => {
    const res = await axios.post(
      `${API_URL}/auth/register`,
      formData
    );

    if (res.data.token) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    }

    setUser(res.data.user || null);
    return res.data;
  };

  /* ================== LOGIN ================== */
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

  /* ================== LOGOUT ================== */
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
