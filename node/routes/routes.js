/*
Archivo de rutas
14/12/2018
*/
//llamamos a la conexión a la base de datos 
const pool = require('../data/config');
//Esta parte del codigo consta del return donde nos muestra un resultado similar al pedido
//en el ejercicio 1 a. Funciona dirigiendonos al dominio
//localhost:8000/cotizacion/dolar
//En vez de dolar puede ser:
//euro, libra o sol
const router = app => {
    app.get('/cotizacion/:mon', (request, response) => {
        const mon = request.params.mon; //variable que utilizamos(dolar, euro, libra, real)
        pool.query('SELECT moneda, precio FROM cotizacion WHERE moneda = ?', mon, (error, result) => {
            if (error) throw error;
            response.send(result[0]);
        });
    });   
//Esta parte del ejercicio consta del return con diseño donde nos muestra 4 monedas(dolar, euro, real, libra)
     app.get('/cotizacion', (request, response) => {
        pool.query('SELECT * FROM cotizacion', (error, result) => {
            if (error) throw error;
            var size = Object.keys(result).length;//obtiene el largo del array(cantidad de monedas)
            for(var x = 0; x<size;x++){
                //La diferencia entre response.write y response.send es que response.send actua como un
                //return, solo se puede llamar una vez y termina la instancia.
                //es por eso que en un for utilizamos response.write
                response.write(
                    "<html><head></head><body><div style='width:200px; height:200px;background-color:aqua;'>"+
                    result[x]["moneda"]+" "+result[x]["precio"]+"</div>"
                    //response.send("El largo es: "+size)
                );
            }
            response.write("</body></html>");
        });
    });
}
//Siempre exportar para que se pueda usar en el archivo principal
module.exports = router;