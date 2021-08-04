function mostrar()
{
	let destino 
	destino = document.getElementById("txtIdDestino").value;
	
	switch( destino )
	{
		case "Bariloche":
		  alert("esta al oeste");
		  break;
		case "MMar del plata":
		  alert("Esta al este");
		  break;
		case "Cataratas":
		  alert("esta al norte");
		  break;
		case "Ushuaia":
		  alert("esta al sur");
		  break;

	}
}