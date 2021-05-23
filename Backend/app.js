const express = require('express')
    //const mysqldb =require('./database/database');
const bodyparser = require('body-parser');

const app = express();
//----- Para enviar datos por JSON
app.use(bodyparser.json());
//----- Para enviar datos por URLENCODED
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});


//mysqldb.connect();

//app.use('/bgricel/usuario/',require('./routes/usuario.route'));