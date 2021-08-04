/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

		// Determinar variables.
		let sueldo
		let aumento
		let nuevoSueldo
	
		// Registrar el sueldo como número.
		sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
		// Calcular el aumento.
		aumento = (10 * sueldo) / 100;
		
		// Calcular el sueldo total.
		nuevoSueldo = sueldo + aumento

		document.getElementById("txtIdResultado").value = nuevoSueldo
	
}   

/* estrategia de resolucio
declaracion de variables sueldo, nuevo sueldo, aumento
leer sueldo
calculo aumento
obtengo el nuevo sueldo
muestro el resultado*/ 