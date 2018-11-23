// JSON file with data markers
//var mapJsonFile = 'https://cdn.rawgit.com/rhcarlosweb/google-maps-markers/7facb603/stores.json';
var mapJsonFile = 'data.json';
 window.onload = cargarEventos;

function cargarEventos(){
	document.getElementById("mostrar-tabla").addEvenListener("click", mostrarTabla, true);
}

function mostrarTabla(){
alert("cargando");
	var cuerpotabla = document.getElementById("equipos-tabla");
	cuerpoTabla.innerHTML = "<tr><th>Marcavalle</th><th>gym</th><th>-13.508363,</th><th>-71.981724</th></tr>";
}