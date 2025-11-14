import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import { pool } from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Probar conexión
pool.getConnection()
    .then(() => console.log("Conexión MySQL exitosa"))
    .catch((err) => console.log("Error conectando a MySQL:", err));

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`User-service corriendo en puerto ${process.env.PORT}`);
});
