import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { userService } from "../services/userService";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function loadProfile() {
    try {
      const res = await userService.getProfile();
      setUser(res.data);
    } catch (error) {
      setUser(null);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadProfile();
    }
  }, []);

  const login = async (email, password) => {
    const res = await userService.login({ email, password });
    localStorage.setItem("token", res.data.token);
    await loadProfile();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
