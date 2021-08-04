function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 13 && edad <= 17) // si estoy dentro del rango
	//if(!(edad >= 13 || edad <= 17)) //si no estoy fuera del rango
	{
		alert("Es adolescente")
	}
	


}//FIN DE LA FUNCIÓN