import React from "react";
import { Form } from "react-bootstrap";

export default function FancyInput({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Form.Group>
  );
}
