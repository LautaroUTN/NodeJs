/*
Archivo principal del proyecto
14/12/2018
*/
const routes = require('./routes/routes');
const express = require('express');
const port = 8000;//puerto en el que se va a trabajar
const app = express();//framework express
//se ejecuta todo app de routes
routes(app);
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Servidor funcionando en ${server.address().port}`);
})
