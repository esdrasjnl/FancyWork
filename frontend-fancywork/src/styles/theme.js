import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1E88E5" },
    secondary: { main: "#F50057" },
    background: { default: "#F9FAFB" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h6: { fontWeight: 600 },
  },
});

export default theme;
