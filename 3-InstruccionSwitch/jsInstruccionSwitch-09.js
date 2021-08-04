function mostrar()
{
	let estacion;
	let destino;
	let precio = 15000;

	estacion = document.getElementById("txtIdDestino").value;
	destino = document.getElementById("txtIdEstacion").value;

	switch( estacion ) 
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				alert("el precio es" + (precio + precio * 0.2));
			} 
			else if (destino == "Cataratas" || destino == "Cordoba")
			{
              alert("El precio es" + (precio - precio * 0.1));
			}
			else 
			{
				alert("El precio es " + (precio - precio * 0.2));
			}
		break;
		case "Verano":
			if (destino == "Bariloche")
			{
				alert("el precio es" + (precio - precio * 0.2));
			} 
			else if (destino == "Cataratas" || destino == "Cordoba")
			{
              alert("El precio es" + (precio + precio * 0.1));
			}
			else 
			{
				alert("El precio es " + (precio + precio * 0.2));
			}
		break;
		case "Otoño":
		case "Primavera":	
			if (destino == "Bariloche")
			{
				alert("el precio es" + (precio + precio * 0.1));
			} 
			else if (destino == "Cataratas")
			{
              alert("El precio es" + (precio + precio * 0.1));
			}
			else if (destino == "Mar Del PLata")
			{
				alert("El precio es" + (precio + precio * 0.2));
			}
			else if (destino == "Cordoba")
			{
				alert("El precio es " + precio);
			}
		break;
		

	}
	
	


}
