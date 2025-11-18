import React, { createContext, useContext, useEffect, useState } from "react";
import { userService } from "../services/userService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carga inicial si hay token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    // intenta obtener perfil
    userService.getProfile()
      .then(res => {
        setUser(res.data.user || res.data); // adapta según respuesta
      })
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password_user) => {
    const res = await userService.login({ email, password_user });
    // Se espera token y user (ajusta según tu backend)
    if (res.status === 200) {
      const { token, user } = res.data;
      if (token) localStorage.setItem("token", token);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } else {
        // si backend devuelve solo user
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return { success: true };
    }
    return { success: false };
  };

  const register = async (form) => {
    const res = await userService.register(form);
    if (res.status === 201 || res.status === 200) {
      // si backend devuelve token+user, guárdalos; si no, solo user
      const { token, user } = res.data;
      if (token) localStorage.setItem("token", token);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      }
      return { success: true, data: res.data };
    }
    return { success: false };
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
