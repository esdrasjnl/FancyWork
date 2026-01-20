const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

exports.connect = function () {
  connection.connect((err) => {
    if (err) {
      console.error("Error al conectar a MySQL:", err.message);
      return false;
    }
    console.log("Conexión establecida con la base de datos");
    return true;
  });
};

exports.connection = connection;
