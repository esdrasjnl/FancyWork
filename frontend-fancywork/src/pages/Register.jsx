import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import FancyInput from "../components/common/FancyInput";
//import { useAuth } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name_user: "",
    last_name: "",
    direction: "",
    email: "",
    password_user: "",
    picture: "",
    phone_main: "",
    phone_secondary: "",
    registrarion_date: "",
    date_birth: "",
    id_rol: 1
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const r = await register(form);
      if (r?.success) navigate("/dashboard");
      else setError("No se pudo crear la cuenta");
    } catch (err) {
      //setError(err.message || "Error al registrar");
      console.error("ERROR BACKEND:", err.response?.data);
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Error al registrar"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xl={11}>
          <Card className="p-4 p-md-5 shadow-sm">
            <h3 className="text-center mb-4">Registro de usuario</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>

              {/* ================= DATOS PERSONALES ================= */}
              <h6 className="text-muted mb-3">Datos personales</h6>
              <Row className="g-3">
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Nombre" name="name_user" value={form.name_user} onChange={handleChange} required />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Apellido" name="last_name" value={form.last_name} onChange={handleChange} required />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Fecha nacimiento" name="date_birth" type="date" value={form.date_birth} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Dirección" name="direction" value={form.direction} onChange={handleChange} />
                </Col>
              </Row>

              {/* ================= CONTACTO ================= */}
              <h6 className="text-muted mt-4 mb-3">Contacto</h6>
              <Row className="g-3">
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Correo" name="email" type="email" value={form.email} onChange={handleChange} required />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Teléfono principal" name="phone_main" value={form.phone_main} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Teléfono secundario" name="phone_secondary" value={form.phone_secondary} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Foto (URL)" name="picture" value={form.picture} onChange={handleChange} />
                </Col>
              </Row>

              {/* ================= CUENTA ================= */}
              <h6 className="text-muted mt-4 mb-3">Cuenta</h6>
              <Row className="g-3">
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Contraseña" name="password_user" type="password" value={form.password_user} onChange={handleChange} required />
                </Col>
                <Col sm={12} md={6} lg={3}>
                  <FancyInput label="Fecha de registro" name="registrarion_date" type="date" value={form.registrarion_date} onChange={handleChange} />
                </Col>
              </Row>

              {/* ================= ACCIÓN ================= */}
              <Button
                type="submit"
                variant="primary"
                className="w-100 mt-4 py-2"
                disabled={loading}
              >
                {loading ? "Registrando..." : "Crear cuenta"}
              </Button>

              <p className="text-center mt-3">
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
              </p>

            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
