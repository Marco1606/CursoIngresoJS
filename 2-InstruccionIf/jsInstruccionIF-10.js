function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * 9 + 1 );

	if ( nota >= 9 ){
		alert("Excelente nota: " + nota );
	} 
	else if (nota >= 4 && nota < 9 ) {
		alert("APROBÓ nota:" + nota);
	}
	  else {
		  alert("Vamos, la proxima se puede nota: " + nota);
	  }

}