// import { useState } from "react";
// import FancyInput from "../common/FancyInput";
// import { Button, Box } from "@mui/material";
// import { useAuth } from "../../hooks/useAuth";

// export default function LoginForm() {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password_user: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(form.email, form.password_user);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
//       <FancyInput label="Correo" name="email" onChange={handleChange} />
//       <FancyInput label="Contraseña" name="password_user" type="password" onChange={handleChange} />
//       <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//         Iniciar Sesión
//       </Button>
//     </Box>
//   );
// }
