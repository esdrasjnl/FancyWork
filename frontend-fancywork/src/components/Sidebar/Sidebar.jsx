import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar d-flex flex-column p-3">
      <h4 className="text-white mb-4">Fancy Work</h4>

      <Nav className="flex-column">

        <Nav.Link
          as={Link}
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          📊 Dashboard
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          👤 Mi Perfil
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/settings"
          className={location.pathname === "/settings" ? "active" : ""}
        >
          ⚙️ Configuración
        </Nav.Link>

        <hr className="text-secondary" />

        <Nav.Link
          as={Link}
          to="/logout"
          className="text-danger"
        >
          🔒 Cerrar Sesión
        </Nav.Link>

      </Nav>
    </div>
  );
}

export default Sidebar;
