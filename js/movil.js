// VARIABLES GLOBALES 
var error = document.getElementById("error");
var preguntas;
var errores = [
	"Solicitar reinicio del móvil",
	"",
	"Configurar con cliente APN",
	"Informar y ofrecer bonos",
	"Línea no activa, debe esperar proceso de portabilidad.",
	"Verificad si es una SIM que le hayamos enviado reciente. Si es así, seguir el proceso de cambio de SIM en GECO/Communiy",
	"No lee la tarjeta, comprobar que la haya puesto correctamente. En este caso es imprescindible la prueba cruzada. Si tras ello persiste, derivar a por duplicado",
	"Debe cambiar la selección de red a manual, conectar a cualquier otro operador y luego volver a configurar en automático",
	"",
	"",
	"No es posible garatizar servicio en interiores"];
var divs = [
	document.getElementById("Pregunta1"),
	document.getElementById("Pregunta2"),
	document.getElementById("Pregunta3"),
	document.getElementById("Pregunta4"),
	document.getElementById("Pregunta5"),
	document.getElementById("Pregunta6"),
	document.getElementById("Pregunta7"),
	document.getElementById("Pregunta8"),	
	document.getElementById("Pregunta9"),
	document.getElementById("Pregunta10"),
	document.getElementById("Pregunta11"),
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
	document.getElementById("p8").value,
	document.getElementById("p9").value,
	document.getElementById("p10").value,
	document.getElementById("p11").value];
	var siguiente = Number(1) + Number(pregunta);
	if (preguntas[pregunta] == "incorrecto") {
		error.innerHTML = errores[pregunta];
		error.style.display = "block";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	} else if (preguntas[pregunta] == "correcto" || preguntas[pregunta] == "concreto") {
		divs[siguiente].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";
		if (pregunta == preguntas.length-1){
			crear.style.display = "block";
			$("#Escalar").show();
		}
	} else if (preguntas[pregunta] == "fallaVoz" || preguntas[pregunta] == "fallaVozYDatos") {
		divs[siguiente+2].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";
	} else if (preguntas[pregunta] == "tarifaOK") {
		divs[siguiente+3].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";
	} else {
		error.innerHTML = "";
		error.style.display = "none";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	}
} 
function noValida(pregunta) {
	preguntas = [
	document.getElementById("p1").value,
	document.getElementById("p2").value,
	document.getElementById("p3").value,
	document.getElementById("p4").value,
	document.getElementById("p5").value,
	document.getElementById("p6").value,
	document.getElementById("p7").value,
	document.getElementById("p8").value,
	document.getElementById("p9").value,
	document.getElementById("p10").value,
	document.getElementById("p11").value,];
	var siguiente = Number(1) + Number(pregunta);
	if (preguntas[pregunta] == "vacio") {
		error.innerHTML = "";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	} else {
		divs[siguiente].style.display= "block";
		error.innerHTML = "";
	}
	if (pregunta == 8 && $("#p9").val() == "incorrecto"){
		$("#cruzada").val("Imposibilidad de realizar");
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
		$(".pregunta").each(function(){
			resultado += $(this).text()+$(this).children().val()+"\n";               
		});
		if ($("#p2").val() == "fallaVoz") {
			resultado += "Tecnología afectada: Voz\n";
		} else if ($("#p2").val() == "fallaVozYDatos") {
			resultado += "Tecnología afectada: Voz y datos\n";
		} else if ($("#p2").val() == "correcto") {
			resultado += "Tecnología afectada: Datos\n";
		}
		if ($("#p10").val() == "concreto"){
			if ($("#p2").val() == "correcto") {
				resultado += "Problema: Sin datos en exterior ni interior en zona concreta.\n";
				resultado += "Comprobaciones:\n-Móvil reiniciado\n-APN configurado";
			} else {				
				resultado += "Problema: Sin cobertura exterior ni interior en zona concreta\n";
				resultado += "Comprobaciones:\n-Móvil reiniciado\n-ICC comprobado\n-Reinicio de selección de red realizado";
			}
		} else {
			if ($("#p2").val() == "correcto") {
				resultado += "Problema: Sin datos en exterior ni interior en cualquier ubicación.\n";
				resultado += "Comprobaciones:\n-Móvil reiniciado\n-APN configurado";
			} else {				
				resultado += "Problema: Sin cobertura exterior ni interior en cualquier ubicación\n";
				resultado += "Comprobaciones:\n-Móvil reiniciado\n-ICC comprobado\n-Reinicio de selección de red realizado";
			}
		}
		if ($("#p9").val() == "correcto"){
			resultado += "\n-Realizada prueba cruzada";
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