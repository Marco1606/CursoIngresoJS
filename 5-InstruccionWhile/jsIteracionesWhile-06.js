function mostrar()
{
	let numero;
	let contador = 0;
	let acumulador = 0;
	let promedio;


	while( contador < 5 )
	{
	 numero = parseInt(prompt("Ingrese un numero"));
	 acumulador += numero;
	 contador ++;  
	}

	promedio = acumulador / 5;


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN