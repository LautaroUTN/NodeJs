Esta aplicación hace consultas a la base de datos

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
    Caso del dolar:
    
    {
        "moneda": "dolar",
        "precio": "38.2"
    }
    
    Caso del real:
    
    {
            "moneda": "real",
            "precio": "9.80"
    }
    
    Caso del euro:
    
    {
            "moneda": "euro",
            "precio": "43.2"
    }
        Caso de la libra:
    
    {
            "moneda": "libra",
            "precio": "48.03"
    }
    
    Para el caso del navegador utilizamos el mismo proceso
    
    -Importar base de datos "monedas" a mysql(en ésta experiencia use mysql con entorno gráfico phpmyadmin)
    -Correr servidor de node js y mysql desde respectivo software con el siguiente comando:
    
        node app.js (lanzar servidor)
        
    DEJAR CORRER EL SERVIDOR Y EJECUTAR DESDE NAVEGADOR DE PREFERENCIA.
    localhost:8000/cotizacion
    
    y allí podremos apreciar el diseño en bootstrap y los datos de la Api
    
    Temas a aclarar (Leer luego de probar el proyecto)
    --No se termino con el refrescado de página en intervalos de 5 segundos, se intento hacer pero habia un error de desbordamiento de pila lo cual no me permitia continuar
    --Si bien utilizar renderizados de html me parece una muy buena práctica no la utilicé para no requerir muchos archivos y armar tanta estructura de archivos para un ejercicio simple.
