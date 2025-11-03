// VARIABLES GLOBALES 
var error = document.getElementById("error");
var preguntas;
var errores = [
	"Solicitar reinicio del router",
	"",
	"No hay incidencia en la línea. El problema puede originarse en su red interna, su dispositivo o en el servicio/app/web al que accede.<br/><br/>Tened en cuenta además que si le da valores de 90-98Mbps, pero tiene contratado más, apunta a limitación física: <br/> - O bien el cable ethernet que utiliza no es CAT5e o superior, o buen la tarjeta de red de su dispositivo no soporta más de 100Mbps. ",
	"Es necesario realizar el test de velocidad con un solo dispositivo conectado, pues puede que tenga algun dispositivo que esté absorbiendo el ancho de banda.",
	"La velocidad solo se garantiza por cable. Si insite en pruebas por wifi, es imprescindible que la prueba sea junto al router, pues de lo contrario afectan factores externos al servicio como interferencias con otras redes, el tipo de vivienda, materiales y grosor de las paredes, azulejos, espejos, dispositivos bluetooth. etc.",
	"No hay incidencia en la línea. El problema puede originarse en su red interna, su dispositivo o en el servicio/app/web al que accede",
	"Es necesario realizar el test de velocidad con un solo dispositivo conectado, pues puede que tenga algun dispositivo que esté absorbiendo el ancho de banda.",
    "Acceder mediante la IP fe félix y las credenciales publicadas en la página de Inicio de Sharepoint. Buscar un canal menos saturado y cambiadlo en la configuración"];
var divs = [
	document.getElementById("Pregunta1"),
	document.getElementById("Pregunta2"),
	document.getElementById("Pregunta3"),
	document.getElementById("Pregunta4"),
	document.getElementById("Pregunta5"),
	document.getElementById("Pregunta6"),
	document.getElementById("Pregunta7"),
	document.getElementById("Pregunta8"),
	document.getElementById("Datos")];

// FUNCIONES
function valida(pregunta) {
	preguntas = [
	document.getElementById("p1").value,
	document.getElementById("p2").value,
	document.getElementById("p3").value,
	document.getElementById("p4").value,
	document.getElementById("p5").value,
	document.getElementById("p6").value,
	document.getElementById("p7").value,
	document.getElementById("p8").value];
	var siguiente = Number(1) + Number(pregunta);
	if (preguntas[pregunta] == "incorrecto") {
		error.innerHTML = errores[pregunta];
		error.style.display = "block";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	} else if (preguntas[pregunta] == "correcto") {
		divs[siguiente].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";
		if (pregunta == preguntas.length-1){
			crear.style.display = "block";
			$("#Escalar").show();
		}
	} else if (preguntas[pregunta] == "wifi") {
		divs[siguiente+2].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";
	} else if (preguntas[pregunta] == "escalar") {
		divs[divs.length-1].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";
        crear.style.display = "block";
        $("#Escalar").show();
	} else {
		error.innerHTML = "";
		error.style.display = "none";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	}
}  

function creaPlantilla() {
	var resultado = "";
	var incompleto = false;
	$(".pregunta").each(function(){
		if ($(this).children().val() == "") {
			incompleto = true;
			$(this).css("color","red");
		} else {
			$(this).css("color","black");
		}
	});   
	if (!incompleto){ 
		plantilla.style.display = "block";
		$("#botonCopiar").show();
		if ($("#p2").val() == "wifi") {
			resultado += "Baja velocidad por wifi\nTest realizado con varios dispositivos delante del router\nRouter reiniciado\nCanales del router routados\n\n";
		} else {
			resultado += "Baja velocidad por cable\nTest realizado con varios dispositivos\nRouter reiniciado\n\n";
        }
		$(".pregunta").each(function(){
			resultado += $(this).text()+$(this).children().val()+"\n";               
		});
		$("#plantilla").children().val(resultado);  
		location.href="#plantilla";
	} 
}    
function copiar() {
	var aux = $("#plantilla").children().get(0);
	aux.select();
	document.execCommand('copy');
	$("#copiar").val("¡Copiado!");
}