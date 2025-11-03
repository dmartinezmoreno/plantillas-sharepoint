// VARIABLES GLOBALES 
divs = [
	document.getElementById("Pregunta1"),
	document.getElementById("Datos")];

// FUNCIONES
function valida(pregunta) {
	var siguiente = Number(1) + Number(pregunta);
	divs[siguiente].style.display= "block";	
	$("#crear").show();
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
	if ($("input[name='adsl']:checked").val() == undefined) {
		incompleto = true;
		$("input[name='adsl']").parent().parent().css("color","red");
	} else {
		$("input[name='adsl']").parent().parent().css("color","black");
	}
	if ($("input[name='internet']:checked").val() == undefined) {
		incompleto = true;
		$("input[name='internet']").parent().parent().css("color","red");
	} else {
		$("input[name='internet']").parent().parent().css("color","black");
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
		$("#plantilla").show();
		$("#Escalar").show();
		$("#botonCopiar").show();
		$(".pregunta").each(function(){
			resultado += $(this).text()+$(this).children().val()+"\n";               
		});
		resultado += "\Motivo de avería: "+$("#p1 option:selected").text()+"\n";		
		resultado += "\nLeds:\n";
		resultado += "Power: "+$("input[name='power']:checked").val()+"\n";
		resultado += "ADSL: "+$("input[name='adsl']:checked").val()+"\n";
		resultado += "Internet: "+$("input[name='internet']:checked").val()+"\n";
		
		
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