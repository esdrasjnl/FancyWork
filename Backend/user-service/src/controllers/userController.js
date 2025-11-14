import * as userService from "../services/userService.js";

export const createUserController = async (req, res) => {
    try {
        const id = await userService.createUser(req.body);
        res.status(201).json({ message: "Usuario creado", id_user: id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUsersController = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUserByIdController = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "No encontrado" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateUserController = async (req, res) => {
    try {
        const result = await userService.updateUser(req.params.id, req.body);
        if (result === 0)
            return res.status(404).json({ message: "No encontrado" });

        res.json({ message: "Usuario actualizado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        if (result === 0)
            return res.status(404).json({ message: "No encontrado" });

        res.json({ message: "Usuario eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
