import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import FancyInput from "../components/common/FancyInput";
import FancyButton from "../components/common/FancyButton";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) navigate("/dashboard");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h6" mb={2} textAlign="center">
          Inicia sesión en FancyWork
        </Typography>
        <FancyInput label="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FancyInput label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <FancyButton text="Entrar" onClick={handleLogin} />
      </Paper>
    </Box>
  );
}
