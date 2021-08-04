function mostrar()
{
	let destino 
	destino = document.getElementById("txtIdDestino").value;
	
	switch( destino )
	{
		case "Bariloche":
		  alert("esta frio");
		  break;
		case "Mar del plata":
		  alert("hace calor");
		  break;
		case "Cataratas":
		  alert("Hace Calor");
		  break;
		case "Ushuaia":
		  alert("Hce frio");
		  break;

	}
}