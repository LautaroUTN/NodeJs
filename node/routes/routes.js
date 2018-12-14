/*
Archivo de rutas
14/12/2018
*/
//llamamos a la conexión a la base de datos 
const pool = require('../data/config');
const router = app => {
    app.get('/cotizacion/:mon', (request, response) => {
        const mon = request.params.mon; //variable que utilizamos(dolar, euro, libra, real)
        pool.query('SELECT moneda, precio FROM cotizacion WHERE moneda = ?', mon, (error, result) => {
            if (error) throw error;
            response.send(
                "<html><head></head><body><div style='width:500px; height:500px;background-color:aqua;'>"+
                result[0]["moneda"]+" "+result[0]["precio"]+"</div></body></html>"
            );
        });
    });
     app.get('/cotizacion', (request, response) => {
        pool.query('SELECT * FROM cotizacion', (error, result) => {
            if (error) throw error;
                "<html><head></head><body><div style='width:500px; height:500px;background-color:aqua;'>"+
                result[0]["moneda"]+" "+result[0]["precio"]+"</div></body></html>"
                response.send(result[i]);
        });
    });
}
//Siempre exportar para que se pueda usar en el archivo principal
module.exports = router;
