var vec=[];
	$.ajax({
		url : "http://api.wahrungsrechner.org/v1/quotes/USD/ARS/jsonp?key=1513|FMofBWu~vVP88X5dzi~BMJBZ8x0y3am4",
		type : "GET",
		dataType : 'jsonp',
		jsonpCallback: 'callback',
		success: function(vec){

			//Vamos a mostrar cotizacion de dolar a peso argentino
			//var horario = new Date();
			//var widget = Mostrar(vec);
			console.log("el resultado total");
			console.log(vec);
			
			console.log("$"+vec["result"]["quantity"]+"ARS");
			console.log("Equivale a "+vec["result"]["value"]+"USD");
			console.log("Ult vez consultado "+vec["result"]["updated"]);

			var dol = vec["result"]["value"];
			$("#peso").html(dol.toFixed(2)+" Dolares");

			$("#cot").html("$"+vec["result"]["quantity"]+" Peso Argentino");
		}
	});


