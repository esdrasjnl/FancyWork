import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/RegisterPage.jsx";
import { useAuth, AuthProvider } from "./context/AuthContext.jsx";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* RUTAS PÚBLICAS */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  {/* <-- YA NO ES PRIVADA */}

          {/* RUTA PROTEGIDA */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
                  Bienvenido a FancyWork 👕
                </h1>
              </PrivateRoute>
            }
          />

          {/* DEFAULT */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
