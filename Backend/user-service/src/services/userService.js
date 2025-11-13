import { pool } from '../config/db.js';

export const userService = {
  async createUser(user) {
    const [result] = await pool.query(
      `INSERT INTO t_user (name_user, last_name, direction, email, password_user, picture,
        phone_main, phone_secondary, registrarion_date, date_birth, id_rol)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.name_user,
        user.last_name,
        user.direction,
        user.email,
        user.password_user,
        user.picture,
        user.phone_main,
        user.phone_secondary,
        user.registrarion_date,
        user.date_birth,
        user.id_rol
      ]
    );
    return { id_user: result.insertId, ...user };
  },

  async getUsers() {
    const [rows] = await pool.query('SELECT * FROM t_user');
    return rows;
  },

  async getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM t_user WHERE id_user = ?', [id]);
    return rows[0];
  },

  async updateUser(id, user) {
    await pool.query(
      `UPDATE t_user
       SET name_user=?, last_name=?, direction=?, email=?, password_user=?, picture=?, 
           phone_main=?, phone_secondary=?, registrarion_date=?, date_birth=?, id_rol=?
       WHERE id_user=?`,
      [
        user.name_user,
        user.last_name,
        user.direction,
        user.email,
        user.password_user,
        user.picture,
        user.phone_main,
        user.phone_secondary,
        user.registrarion_date,
        user.date_birth,
        user.id_rol,
        id
      ]
    );
    return { id_user: id, ...user };
  },

  async deleteUser(id) {
    await pool.query('DELETE FROM t_user WHERE id_user = ?', [id]);
    return { message: 'Usuario eliminado correctamente' };
  }
};
