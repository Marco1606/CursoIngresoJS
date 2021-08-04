function mostrar()
{
	let hora

	hora = parseInt (document.getElementById("txtIdHora").value);

	
	switch( hora )
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		 alert("es de mañana");
		 break;					
	}
	
	/*if(hora > 6 && hora < 12)
	{
		alert("es de mañana");
	}*/


}