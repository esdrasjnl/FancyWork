import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useFetchUsers from "../hooks/useFetchUsers";

export default function Users() {
  const { users, loading } = useFetchUsers();

  if (loading) return <CircularProgress />;

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Usuarios registrados
      </Typography>
      {users.map((u) => (
        <Typography key={u.id}>👤 {u.name}</Typography>
      ))}
    </Box>
  );
}
