/*
Archivo de configuración de base de datos
14/12/2018
*/
//llamamos a mysql
const mysql = require('mysql');
//introducimos datos de nuestro servidor y de mysql
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monedas',
};
//creamos un pool para hacer muchas conexiones y no estar cerrando y abriendolas
const pool = mysql.createPool(config);
//exportamos la conexión
module.exports = pool;