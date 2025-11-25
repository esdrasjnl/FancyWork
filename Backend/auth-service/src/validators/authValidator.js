import Joi from "joi";

export const registerSchema = Joi.object({
  name_user: Joi.string().min(2).max(100).required(),
  last_name: Joi.string().min(1).max(100).allow("", null),
  direction: Joi.string().max(200).allow("", null),
  email: Joi.string().email().required(),
  password_user: Joi.string().min(6).required(),
  picture: Joi.string().uri().optional().allow("", null),
  phone_main: Joi.string().max(50).optional().allow("", null),
  phone_secondary: Joi.string().max(50).optional().allow("", null),
  registrarion_date: Joi.date().optional(),
  date_birth: Joi.date().optional(),
  id_rol: Joi.number().integer().positive().required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password_user: Joi.string().required()
});
