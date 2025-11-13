export class User {
  constructor({
    id_user,
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
  }) {
    Object.assign(this, {
      id_user,
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
    });
  }
}
