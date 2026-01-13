// import { useState } from "react";
// import FancyInput from "../common/FancyInput";
// import { Button, Box } from "@mui/material";
// import { userService } from "../../services/userService";

// export default function RegisterForm() {
//   const [form, setForm] = useState({
//     name_user: "",
//     last_name: "",
//     direction: "",
//     email: "",
//     password_user: "",
//     picture: "",
//     phone_main: "",
//     phone_secondary: "",
//     registrarion_date: "",
//     date_birth: "",
//     id_rol: 1 // valor por defecto
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await userService.register(form);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>

//       <FancyInput
//         label="Nombre"
//         name="name_user"
//         value={form.name_user}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Apellido"
//         name="last_name"
//         value={form.last_name}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Dirección"
//         name="direction"
//         value={form.direction}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Correo"
//         name="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Contraseña"
//         name="password_user"
//         type="password"
//         value={form.password_user}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="URL Foto de Perfil"
//         name="picture"
//         value={form.picture}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Teléfono principal"
//         name="phone_main"
//         value={form.phone_main}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Teléfono secundario"
//         name="phone_secondary"
//         value={form.phone_secondary}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Fecha de registro"
//         name="registrarion_date"
//         type="date"
//         value={form.registrarion_date}
//         onChange={handleChange}
//       />

//       <FancyInput
//         label="Fecha de nacimiento"
//         name="date_birth"
//         type="date"
//         value={form.date_birth}
//         onChange={handleChange}
//       />

//       <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//         Registrarse
//       </Button>
//     </Box>
//   );
// }
