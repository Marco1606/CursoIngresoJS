function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13)
	{
		alert("es niño");
	}
    else
	{
	  if(edad <= 17 )
	 {
	   	alert("es adolescente");
	 }
	 else
	  {
	  	alert("es adulto");
	  }
    }
}