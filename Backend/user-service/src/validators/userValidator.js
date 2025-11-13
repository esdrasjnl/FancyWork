import Joi from 'joi';

export const userSchema = Joi.object({
  name_user: Joi.string().min(3).max(100).required(),
  last_name: Joi.string().min(3).max(100).required(),
  direction: Joi.string().max(200).optional(),
  email: Joi.string().email().max(200).required(),
  password_user: Joi.string().min(6).max(20).required(),
  picture: Joi.string().max(200).optional(),
  phone_main: Joi.string().max(50).required(),
  phone_secondary: Joi.string().max(50).optional(),

  registration_date: Joi.date().default(() => new Date()),

  date_birth: Joi.date().optional(),
  id_rol: Joi.number().integer().required()
});
