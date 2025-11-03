// VARIABLES GLOBALES 
var error = document.getElementById("error"),
escalar = document.getElementById("Escalar"),
crear = document.getElementById("crear"),
plantilla = document.getElementById("plantilla"),
preguntas,
mensajes = [
	"",
	"Solicitad reinicio de router",
	"Debe probar directo a al router sin sin microfiltros, spliters o duplicadores. El servicio de fijo del operador se da el el puerto RJ11 del router. Explicar al cliente con tacto que de ahí en adelante es su instalación privada y no es respondabilidad del operador",
	"",
	"Solicitad reset sólo del router, nunca de ONT"],
divs = [
	document.getElementById("Pregunta1"),
	document.getElementById("Pregunta2"),
	document.getElementById("Pregunta3"),
	document.getElementById("Pregunta4"),
	document.getElementById("Pregunta5"),
	document.getElementById("Datos")],
selectores = document.querySelectorAll(".select");

// FUNCIONES
function valida(pregunta) {
	preguntas = [
	document.getElementById("p1").value,
	document.getElementById("p2").value,
	document.getElementById("p3").value,
	document.getElementById("p4").value,
	document.getElementById("p5").value];
	var siguiente = Number(1) + Number(pregunta);
	if (preguntas[pregunta] == "incorrecto") {
		error.innerHTML = mensajes[pregunta];
		error.style.display = "block";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	} else if (preguntas[pregunta] != "incorrecto") {
		divs[siguiente].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";   
		selectores[pregunta].disabled = true; 
	} else {
		error.innerHTML = "";
		error.style.display = "none";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	} if (pregunta == preguntas.length-1){
		$("#crear").show();
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
		if ($("#p1").val() == "noEmite"){
			resultado += "Incidencia VOIP NO RECIBE\n";
		} else if ($("#p1").val() == "noRecibe"){
			resultado += "Incidencia VOIP NO EMITE\n";
		} else if ($("#p1").val() == "niEmiteNiRecibe"){
			resultado += "Incidencia VOIP NO EMITE NI RECIBE\n";
		}
		$("#botonCopiar").show();
		$(".pregunta").each(function(){
			resultado += $(this).text()+$(this).children().val()+"\n";               
		});
		resultado += "\nPruebas realizadas:\n";
		resultado += "Reinicio del router: Sí\n";
		resultado += "Conectado a directo a router: Sí\n";
		resultado += "Sin microfiltros ni splitters: Sí\n";
		if ($("#p4").val() == "correcto"){
			resultado += "Probado otro terminal: Sí\n";
		} else {
			resultado += "Probado otro terminal: No";
		}
		if ($("#p5").val() == "correcto"){
			resultado += "Estado VOIP en Félix: Verde\n";
		} else {
			resultado += "Estado VOIP en Félix: Rojo\n";
		}
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