function mostrar()
{
	
let mes;
 
mes = document.getElementById("txtIdMes").value;

switch( mes )
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno");
		break;

	case "Julio":
	case "Agosto":
		alert("abrigate que hace frio!!!");
		break;
	default:
		alert("ya paso el frio!!");
													
}





}