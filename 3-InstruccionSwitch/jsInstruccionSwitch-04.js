function mostrar()
{
	let mes;
 
     mes = document.getElementById("txtIdMes").value;

	 switch( mes )
	 {
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		 alert("este mes tiene 30 dias");
		break;
		
		case "Febrero":
		alert("Este mes tiene 28 dias");

		default:
		 alert("este mes tiene 31 dias");
	 }

	



}