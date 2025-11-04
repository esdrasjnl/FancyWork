import React from "react";
import TextField from "@mui/material/TextField";

export default function FancyInput({ label, value, onChange, type = "text" }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      sx={{ mb: 2 }}
    />
  );
}
