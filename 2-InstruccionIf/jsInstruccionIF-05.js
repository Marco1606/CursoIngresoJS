function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad <= 12 || edad >= 18)
	//if(!(edad >= 13 && edad <= 17))
	{
		alert("No es adolescente");
	}
	
} 