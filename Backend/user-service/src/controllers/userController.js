import { userService } from '../services/userService.js';
import { userSchema } from '../validators/userValidator.js';

export const userController = {
  async create(req, res) {
    try {
      const { error, value } = userSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const newUser = await userService.createUser(value);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  async getAll(req, res) {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  async getById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener usuario' });
    }
  },

  async update(req, res) {
    try {
      const { error, value } = userSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const updatedUser = await userService.updateUser(req.params.id, value);
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  },

  async delete(req, res) {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  }
};
