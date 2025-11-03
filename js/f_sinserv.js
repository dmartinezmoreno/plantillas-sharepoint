// VARIABLES GLOBALES 
var error = document.getElementById("error"),
escalar = document.getElementById("Escalar"),
crear = document.getElementById("crear"),
plantilla = document.getElementById("plantilla"),
preguntas,
mensajes = [
	"",
	"Solo se ha desactivado la WLAN. Verificar con cliente, buscar el botón que ponga wifi o WLAN en su router y que lo pulse. También podemos acceder nosotros por IP y activarlas nosotros. También es probable que ocn un reinicio se activen de nuevo, y si no, un reset",
	"Es necesario verificar si el problema es del dispositivo o de la línea. Para ello es necesario que lo pruebe en otro dispositivo. Si en otro dispositivo funciona, el problema es de su dispositivo",
	"Debe realizarse el reinicio."],
divs = [
	document.getElementById("Pregunta1"),
	document.getElementById("Pregunta2"),
	document.getElementById("Pregunta3"),
	document.getElementById("Pregunta4"),
	document.getElementById("Datos")],
selectores = document.querySelectorAll(".select");

// FUNCIONES
function valida(pregunta) {
	preguntas = [
	document.getElementById("p1").value,
	document.getElementById("p2").value,
	document.getElementById("p3").value,
	document.getElementById("p4").value];
	var siguiente = Number(1) + Number(pregunta);
	if (preguntas[pregunta] == "incorrecto") {
		error.innerHTML = mensajes[pregunta];
		error.style.display = "block";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	} else if (preguntas[pregunta] == "correcto") {
		divs[siguiente].style.display= "block";
		error.innerHTML = "";
		error.style.display = "none";    
	} else if (preguntas[pregunta] == "saltar") {
		divs[4].style.display= "block";                
		error.innerHTML = "";
		error.style.display = "none";   
		$("#crear").show();
	} else {
		error.innerHTML = "";
		error.style.display = "none";
		for (i=siguiente;i<divs.length;i++) {
			divs[i].style.display= "none";
		}
	}
    if (pregunta == preguntas.length-1){
		$("#crear").show();
	}
}     
function creaPlantilla() {
	var resultado = "";
	var incompleto = false;
	if ($("input[name='power']:checked").val() == undefined) {
		incompleto = true;
		$("input[name='power']").parent().parent().css("color","red");
	} else {
		$("input[name='power']").parent().parent().css("color","black");
	}
	if ($("input[name='pon']:checked").val() == undefined) {
		incompleto = true;
		$("input[name='pon']").parent().parent().css("color","red");
	} else {
		$("input[name='pon']").parent().parent().css("color","black");
	}
	if ($("input[name='los']:checked").val() == undefined) {
		incompleto = true;
		$("input[name='los']").parent().parent().css("color","red");
	} else {
		$("input[name='los']").parent().parent().css("color","black");
	}
	$(".pregunta").each(function(){
		if ($(this).children().val() == "") {
			incompleto = true;
			$(this).css("color","red");
		} else {
			$(this).css("color","black");
		}
	});   
	if (!incompleto){ 
        resultado += "SIN SERVICIO TOTAL FIBRA\n"
		plantilla.style.display = "block";
		$("#botonCopiar").show();
		$(".pregunta").each(function(){
			resultado += $(this).text()+$(this).children().val()+"\n";               
		});
		resultado += "\nLeds:\n";
		resultado += "Power: "+$("input[name='power']:checked").val()+"\n";
		resultado += "PON: "+$("input[name='pon']:checked").val()+"\n";
		resultado += "LOS: "+$("input[name='los']:checked").val()+"\n";
		resultado += "\nPruebas realizadas:\n";
        resultado += "Reinicio del router: Sí\n";
		$("#plantilla").children().val(resultado);  
		location.href="#plantilla";
		location.href="#plantilla";
	} 
}    
function copiar() {
	var aux = $("#plantilla").children().get(0);
	aux.select();
	document.execCommand('copy');
	$("#copiar").val("¡Copiado!");
}