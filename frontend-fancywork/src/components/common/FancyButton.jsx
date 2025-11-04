import React from "react";
import Button from "@mui/material/Button";

export default function FancyButton({ text, onClick, color = "primary" }) {
  return (
    <Button
      variant="contained"
      color={color}
      sx={{ borderRadius: 2, textTransform: "none" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
