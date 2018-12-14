Ésta aplicación hace consultas a la base de datos

Para ejecutar ésta aplicación:
    -Importar base de datos "monedas" a mysql(en ésta experiencia use mysql con entorno gráfico phpmyadmin)
    -Correr servidor de node js y mysql desde respectivo software con el siguiente comando:
    
        node app.js (lanzar servidor)
        
    Recordar, DEJAR CORRER EL SERVIDOR Y EJECUTAR DESDE LA APLICACION POSTMAN O DESDE NAVEGADOR DE PREFERENCIA.
    Desde Postman utilizamos la opcion "get" y ponemos en la url:
    
    localhost:8000/cotizacion/dolar (caso del dolar)
    localhost:8000/cotizacion/euro (caso del euro)
    localhost:8000/cotizacion/real (caso del real)
    Monedas disponibles:
        --dolar
        --euro
        --real
        --libra
        
    Si miramos el resultado de postman será muy parecido a lo siguiente
    *caso del dolar*
    const dolar = [{
        "moneda": "dolar",
        "precio": "38.2"
    }];
    
    
    *caso del real*
    const real = [{
            "moneda": "real",
            "precio": "9.80"
        }];
        
        
    *caso del euro*
    const euro = [{
            "moneda": "euro",
            "precio": "43.2"
        }];    
    
    
    
    
    /*
    //rutas
    app.get('/cotizacion/dolar', (request, response) => {
        response.send(dolar);
    });
    //ejercicio 1B
    app.get('/cotizacion/euro', (request, response) => {
        response.send(euro);
    });
    app.get('/cotizacion/real', (request, response) => {
        response.send(real);
    });
    */