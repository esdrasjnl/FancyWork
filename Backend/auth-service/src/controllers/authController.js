import { pool } from "../config/db.js";
import { registerSchema, loginSchema } from "../validators/authValidator.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export async function register(req, res) {
  try {
    const { error, value } = registerSchema.validate(req.body, { stripUnknown: true });
    if (error) return res.status(400).json({ message: error.details.map(d => d.message).join(", ") });

    // check existing email
    const [existRows] = await pool.query("SELECT id_user FROM t_user WHERE email = ?", [value.email]);
    if (existRows.length) return res.status(409).json({ message: "Email already registered" });

    // check role exists
    const [roleRows] = await pool.query("SELECT id_rol FROM t_rol WHERE id_rol = ?", [value.id_rol]);
    if (!roleRows.length) return res.status(400).json({ message: "Role not found" });

    // hash password
    value.password_user = await hashPassword(value.password_user);

    // set registrarion_date default to today if not provided
    if (!value.registrarion_date) value.registrarion_date = new Date();

    const sql = `INSERT INTO t_user
      (name_user, last_name, direction, email, password_user, picture, phone_main, phone_secondary, registrarion_date, date_birth, id_rol)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
      value.name_user,
      value.last_name || null,
      value.direction || null,
      value.email,
      value.password_user,
      value.picture || null,
      value.phone_main || null,
      value.phone_secondary || null,
      value.registrarion_date,
      value.date_birth || null,
      value.id_rol
    ];

    const [result] = await pool.query(sql, params);
    const id_user = result.insertId;

    // Optional: create JWT
    const token = jwt.sign({ id_user, email: value.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // return safe user data
    const userResp = {
      id_user,
      name_user: value.name_user,
      last_name: value.last_name,
      email: value.email,
      id_rol: value.id_rol,
      picture: value.picture || null
    };

    return res.status(201).json({ message: "User registered", user: userResp, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function login(req, res) {
  try {
    console.log("Los datos son::: ",req.body);
    const { error, value } = loginSchema.validate(req.body, { stripUnknown: true });
    if (error) return res.status(400).json({ message: error.details.map(d => d.message).join(", ") });

    const [rows] = await pool.query("SELECT * FROM t_user WHERE email = ?", [value.email]);
    if (!rows.length) return res.status(401).json({ message: "Invalid credentials" });

    const user = rows[0];

    const ok = await comparePassword(value.password_user, user.password_user);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id_user: user.id_user, email: user.email, id_rol: user.id_rol }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // respond without password
    const userResp = {
      id_user: user.id_user,
      name_user: user.name_user,
      last_name: user.last_name,
      email: user.email,
      picture: user.picture,
      id_rol: user.id_rol
    };

    return res.json({ message: "Login successful", user: userResp, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function profile(req, res) {
  try {
    const id = req.user?.id_user;
    if (!id) return res.status(400).json({ message: "Invalid token payload" });

    const [rows] = await pool.query("SELECT id_user, name_user, last_name, email, picture, direction, phone_main, phone_secondary, registrarion_date, date_birth, id_rol FROM t_user WHERE id_user = ?", [id]);
    if (!rows.length) return res.status(404).json({ message: "User not found" });

    return res.json({ user: rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
