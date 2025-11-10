import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Aquí luego harás fetch a tu backend
    if (email === "admin@fancywork.com" && password === "123456") {
      const fakeUser = { name: "Administrador", email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
