import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
//import FancyInput from "../components/FancyInput";
import FancyInput  from "../components/common/FancyInput";
//import { useAuth } from "../context/AuthContext";
//import { useAuth } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password_user: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const r = await login(form.email, form.password_user);
      if (r.success) navigate("/dashboard");
      else setError(r.message || "Credenciales inválidas");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error al conectar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-3">Iniciar Sesión</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FancyInput label="Correo" name="email" value={form.email} onChange={handleChange} required />
              <FancyInput label="Contraseña" name="password_user" type="password" value={form.password_user} onChange={handleChange} required />
              <Button type="submit" variant="primary" className="w-100 mt-2" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>
              <p className="text-center mt-3">
                ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
