import { Container, Typography } from "@mui/material";
import RegisterForm from "../components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>Registro</Typography>
      <RegisterForm />
    </Container>
  );
}
