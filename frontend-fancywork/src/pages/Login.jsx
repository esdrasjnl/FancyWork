import { Container, Typography } from "@mui/material";
import LoginForm from "../components/forms/LoginForm";

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>Iniciar Sesión</Typography>
      <LoginForm />
    </Container>
  );
}
