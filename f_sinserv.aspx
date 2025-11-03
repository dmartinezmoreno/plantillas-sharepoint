<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<title>SIN SERVICIO FIBRA </title>
		<link href="css\estabanell.css" rel="stylesheet" type="text/css">
	</head>
    
	<body>
        <div id="cabecera">SIN SERVICIO FIBRA
        </div>
        
        <!--    PREGUNTAS    -->  
        <div id="Pregunta1" class="row">
            <div class="col1">Tiene led LOS en rojo o el estado en Félix es rojo?</div> 
            <div class="col2">
                <select id="p1" type="text" class="select" onchange='valida("0")'>
                    <option value="vacio"></option>
                    <option value="saltar">Sí</option>
                    <option value="correcto">No</option>
                </select>
            </div>
        </div>
        <div id="Pregunta2" style="display: none">
            <div class="col1">¿Los leds de wifi están encendidos?</div> 
            <div class="col2">
                <select id="p2" type="text" class="select" onchange='valida("1")'>
                    <option value="vacio"></option>
                    <option value="correcto">Sí</option>
                    <option value="incorrecto">No</option>
                </select>
            </div>
        </div>
        <div id="Pregunta3" style="display: none">
            <div class="col1">¿Ha probado con más de un dispositivo?: </div> 
            <div class="col2">
                <select id="p3" type="text" class="select" onchange='valida("2")'>
                    <option value="vacio"></option>
                    <option value="correcto">Sí</option>
                    <option value="incorrecto">No</option>
                </select>
            </div>
        </div>

        <div id="Pregunta4" style="display: none">
            <div class="col1">¿Se ha reiniciado ONT+Router?: </div> 
            <div class="col2">
                <select id="p4" type="text" class="select" onchange='valida("3")'>
                    <option value="vacio"></option>
                    <option value="correcto">Sí</option>
                    <option value="incorrecto">No</option>
                </select>
            </div>
        </div>  
        
        <!--  PARA ESCALAR    -->
        <div id="Datos" style="display: none">
            <p class="pregunta">Nombre de contacto: <input type="text" size="40"></p>
            <p class="pregunta">Teléfono móvil de contacto: <input type="tel" size="9" maxlength="9"></p>
            <p class="pregunta">Horario de contacto: <input type="text" size="20"></p>
            <p class="pregunta">Descripción del problema: <textarea rows="2" cols="54"></textarea></p>
            <p>Power: 
                <label><input type="radio" name="power" value="Encendido">Encendido</label> 
                <label><input type="radio" name="power" value="Apagado">Apagado</label>
            </p>
            <p>PON: 
                <label><input type="radio" name="pon" value="Encendido">Encendido</label> 
                <label><input type="radio" name="pon" value="Apagado">Apagado</label>
                <label><input type="radio" name="pon" value="Parpadea">Parpadea</label>
            </p>
            <p>LOS: 
                <label><input type="radio" name="los" value="Encendido">Encendido</label> 
                <label><input type="radio" name="los" value="Apagado">Apagado</label>
                <label><input type="radio" name="los" value="Parpadea">Parpadea</label>
            </p>                    
            <div id="Escalar">Si NO es Fibra Elektra, pasar OT de incidencia Propietario: Mattelco Estado: Pendent d'agendar
                <br/>El caso debe quedar: Propietario: Tu usuario Prioridad: Crítico
		<br/><br>Si es Fibra Elektra, no se abre OT. Se deja el caso abierto: Propietario: Tu usuario Prioridad: Crítico
		</div>
        </div>   
        
        <!--    BLOQUE DE ERROR     -->
        <p id="error" style="display: none"></p>
        <br/>
        <div>
            <input type="button" value="Recargar" onclick="location.reload()"/>
			<input type="button" value="Atrás" onclick="history.back()"/>
			<br/>
			<input id="crear" type="button" value="Crear plantilla" onclick="creaPlantilla()" style="display: none" />
        </div>

        <div id="plantilla" style="display: none">
            <textarea rows="20" cols="54"></textarea><br/>	
        </div>
		<div id="botonCopiar" style="display: none">		
			<input id="copiar" type="button" value="Copiar" onclick="copiar()"/>
        </div>
				
    <!--    JAVASCRIPT    -->
	<script src="js\f_sinserv.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>

    </script> 		
	</body>
</html>