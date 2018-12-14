/*
			 Corfield, Lautaro
*/

var vec=[];
function DatosNow(){
	function Mostrar(vec){
	return vec.weather;
}
	$.ajax({
		url : "https://api.openweathermap.org/data/2.5/forecast/daily?q=q=Buenos_Aires,AR&mode=xml&units=metric&cnt=7&APPID=f44ce8aa2623eeb307f7d5fb56faa6a3",
		type : "GET",
		dataType : 'Jsonp',
		success: function(vec){
			var horario = new Date();
			var dias = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
			var widget = Mostrar(vec);
			console.log(horario.getHours());
			for(var j = 0; j<25;j++){	
				if(j>=12&&j<=20){
					switch(horario.getHours()){
						case j:
							for (var i = 0; i < 7; i++) {
								//detecta el dia
								$("#fec").html(horario.getDate() + "/" + (horario.getMonth() +1) + "/" + horario.getFullYear());
								$("#"+"fecha_"+i).html(dias[horario.getUTCDay()+i])	
								$("#temp_actual_"+i).html(vec.list[i].temp.eve.toString());
								$("#temp_max_"+i).html(vec.list[i].temp.max.toString().substr(0,vec.list[i].temp.max.toString().length-1));
								//console.log("dia_"+i+" " +vec[0].daily.data[i].icon);
								$("#dia_"+i).attr('src', "../weather array/images/icons/"+vec.list[i].weather[0].icon+".svg");				
							}
						break	
					}
				}
				if(j<=12&&j>=6){
					switch(horario.getHours()){
						case j:
							for (var i = 0; i < 7; i++) {
								$("#temp_actual_"+i).html(vec.list[i].temp.morn.toString());
								$("#temp_max_"+i).html(vec.list[i].temp.max.toString().substr(0,vec.list[i].temp.max.toString().length-1));
								//console.log("dia_"+i+" " +vec[0].daily.data[i].icon);
								$("#dia_"+i).attr('src', "../weather array/images/icons/"+vec.list[i].weather[0].icon+".svg");				
							}
						break	
					}
				}
				if(j>=20&&j<=6){
					switch(horario.getHours()){
						case j:
							for (var i = 0; i < 7; i++) {
								$("#temp_actual_"+i).html(vec.list[i].temp.night.toString());
								$("#temp_max_"+i).html(vec.list[i].temp.max.toString().substr(0,vec.list[i].temp.max.toString().length-1));
								//console.log("dia_"+i+" " +vec[0].daily.data[i].icon);
								$("#dia_"+i).attr('src', "../weather array/images/icons/"+vec.list[i].weather[0].icon+".svg");				
							}
						break	
					}
				}

			}
		}
	});

}

