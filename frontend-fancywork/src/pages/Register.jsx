import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import FancyInput from "../components/common/FancyInput";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name_user: "",
    last_name: "",
    email: "",
    password_user: "",
    direction: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const r = await register(form);
      if (r.success) {
        // si quieres, redirige automáticamente al dashboard o login
        navigate("/dashboard");
      } else {
        setError("No se pudo crear la cuenta");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error al registrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-3">Crear Cuenta</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FancyInput label="Nombre" name="name_user" value={form.name_user} onChange={handleChange} required />
              <FancyInput label="Apellido" name="last_name" value={form.last_name} onChange={handleChange} required />
              <FancyInput label="Correo" name="email" value={form.email} onChange={handleChange} required />
              <FancyInput label="Contraseña" name="password_user" type="password" value={form.password_user} onChange={handleChange} required />
              <FancyInput label="Dirección" name="direction" value={form.direction} onChange={handleChange} />
              <Button type="submit" variant="primary" className="w-100 mt-2" disabled={loading}>
                {loading ? "Registrando..." : "Registrarse"}
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
