import { useState } from "react";
import FancyInput from "../common/FancyInput";
import { Button, Box } from "@mui/material";
import { userService } from "../../services/userService";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name_user: "",
    last_name: "",
    email: "",
    password_user: "",
    direction: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userService.register(form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <FancyInput label="Nombre" name="name_user" onChange={handleChange} />
      <FancyInput label="Apellido" name="last_name" onChange={handleChange} />
      <FancyInput label="Correo" name="email" onChange={handleChange} />
      <FancyInput label="Contraseña" name="password_user" type="password" onChange={handleChange} />
      <FancyInput label="Dirección" name="direction" onChange={handleChange} />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Registrarse
      </Button>
    </Box>
  );
}
