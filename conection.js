var mysql = require('mysql2');

var conection = mysql.createConnection({ host: "localhost", database: "impercol", user: "root", password: "admin" });

conection.connect((error) => {

    if (error) throw error;
    console.log("Conectado c:");
})

function insertar(body) {
    let sql = `INSERT INTO form(nombre, email, asunto, mensaje) values(" ${body.nombre} ",
"${body.email}", "${body.asunto}", "${body.mensaje}")`

    //avoid sql injection node js

    conection.query(sql, (error, result) => {
        if (error)
            throw error;
        console.log("mensaje enviado c:");
    });
}
module.exports = { conection, insertar };