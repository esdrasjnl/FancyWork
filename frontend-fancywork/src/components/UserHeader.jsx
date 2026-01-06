import React from "react";
//import { useAuth } from "../hooks/useAuth";
import { useAuth } from "../hooks/useAuth";

const UserHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="user-header" style={{ padding: "10px", background: "#f2f2f2" }}>
      {user ? (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Hola, {user.name_user}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <span>No has iniciado sesión</span>
      )}
    </header>
  );
};

export default UserHeader;
