import { pool } from "../config/db.js";

export const createUser = async (data) => {
    const {
        name_user,
        last_name,
        direction,
        email,
        password_user,
        picture,
        phone_main,
        phone_secondary,
        registrarion_date,
        date_birth,
        id_rol
    } = data;

    const sql = `
        INSERT INTO t_user(
            name_user, last_name, direction, email,
            password_user, picture, phone_main, phone_secondary,
            registrarion_date, date_birth, id_rol
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await pool.query(sql, [
        name_user,
        last_name,
        direction,
        email,
        password_user,
        picture,
        phone_main,
        phone_secondary,
        registrarion_date,
        date_birth,
        id_rol,
    ]);

    return result.insertId;
};

export const getUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM t_user");
    return rows;
};

export const getUserById = async (id_user) => {
    const [row] = await pool.query(
        "SELECT * FROM t_user WHERE id_user = ?",
        [id_user]
    );
    return row[0];
};

export const updateUser = async (id_user, data) => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const setClause = keys.map((key) => `${key} = ?`).join(", ");

    const sql = `UPDATE t_user SET ${setClause} WHERE id_user = ?`;

    const [result] = await pool.query(sql, [...values, id_user]);

    return result.affectedRows;
};

export const deleteUser = async (id_user) => {
    const [result] = await pool.query(
        "DELETE FROM t_user WHERE id_user = ?",
        [id_user]
    );
    return result.affectedRows;
};
