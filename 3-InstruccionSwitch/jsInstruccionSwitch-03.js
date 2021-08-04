function mostrar()
{
let mes;
 
mes = document.getElementById("txtIdMes").value;


if(mes == "Febrero")
{
   alert("Este mes no tiene mas de 29 dias");
}

else 
{
   alert("este mes tiene mas de 30 dias");
}

/*switch( mes )
{
   case "Febrero":
    alert("Este mes no tiene mas de 29 dias");
   break;	   
   
   default:
	 alert("Este mes tiene mas de 30 dias");  
}*/
}