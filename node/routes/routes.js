/*
Archivo de rutas
14/12/2018
*/
//llamamos a la conexión a la base de datos 
const pool = require('../data/config');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);


//Esta parte del codigo consta del return donde nos muestra un resultado similar al pedido
//en el ejercicio 1 a. Funciona dirigiendonos al dominio
//localhost:8000/cotizacion/dolar
//En vez de dolar puede ser:
//euro, libra, sol, esterlina. Si queremos podemos agregar más monedas y ésto será automático
const router = app => {
    //A esta ruta no le agregué diseño a proposito, para ver el json limpio
    app.get('/cotizacion/:mon', (request, response) => {
        const mon = request.params.mon; //variable que utilizamos(dolar, euro, libra, real)
        pool.query('SELECT moneda, precio FROM cotizacion WHERE moneda = ?', mon, (error, result) => {
            if (error) throw error;
            response.send(result[0]);
        });
    });
//Esta parte del ejercicio consta del return con diseño donde nos muestra 4 monedas(dolar, euro, real, libra)
    app.get('/cotizacion', (request, response) => { 
         var size = 0;
         var html = "";
         var cont = false;
            pool.query('SELECT * FROM cotizacion', (error, result) => {
                if (error) throw error;
                if(cont == false){
                    size = Object.keys(result).length;//obtiene el largo del array(cantidad de monedas)
                    html = "<html><head>";
                    html += "<script src='https://code.jquery.com/jquery-1.10.2.js'></script>";
                    html+="<script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy' crossorigin='anonymous'></script>"
                    html+= "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossorigin='anonymous'>";
                    html+="</head><body>";
                    html += "<div class='datos'><ul class='list-group'>";
                    response.write(html);
                    for(var x = 0; x<size;x++){
                        html += "<li id='utli' class='list-group-item list-group-item-secondary'>";
                        html += "<h1 class='display-4'>" + result[x]["moneda"]+"</h1>";
                        html += "<h1 id='precio_"+x+"' class='display-4'>" + result[x]["precio"]+"</h1>";
                        html += "<li>";
                    }
                    html += "</ul></div></body>";
                    html += "</html>";
                    response.write(html);
                    cont=true;
                }else{
                    html = "";
                    html += "<script language='JavaScript' type='text/javascript'>$('#utli').empty()</script>";
                    response.write(html);
                    for(var y = 0; y<size;y++){
                        $("#precio"+y).text(result[y]["precio"]);
                    }
                    response.write(html);
                }
                
        });

    });
}

module.exports = router;