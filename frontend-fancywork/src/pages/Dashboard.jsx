import React from "react";
import { Typography, Container, Box } from "@mui/material";

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a FancyWork 👕
        </Typography>
        <Typography>
          Este será tu panel principal para gestionar clientes, pedidos y diseños.
        </Typography>
      </Box>
    </Container>
  );
}
